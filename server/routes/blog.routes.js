import { Router } from "express";
// import { BlogPost } from "../models/BlogPost.js";
import { BlogPost } from '../models/Post.js';
// import Post from '../models/Post.js';
import { requireAuth } from "../middleware/auth.js";
import { uploadBlogCover } from "../middleware/upload.js";
import { slugify } from "../utils/slugify.js";

const router = Router();

// Public: list published posts
router.get("/", async (req, res) => {
  const posts = await BlogPost.find({ published: true }).sort({ publishedAt: -1 });
  res.json(posts);
});

// Public: single post by slug
router.get("/slug/:slug", async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug, published: true });
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

// Admin: list ALL posts (draft + published)
router.get("/admin/all", requireAuth, async (req, res) => {
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Admin: get single post by id (for editing)
router.get("/admin/:id", requireAuth, async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

// Admin: upload cover image -> returns Cloudinary URL
router.post("/upload-cover", requireAuth, uploadBlogCover, (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ url: req.file.path });
});

// Admin: create post
router.post("/", requireAuth, async (req, res) => {
  try {
    const { title, slug, excerpt, content, tags, coverImage, published } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const finalSlug = slugify(slug || title);
    const post = await BlogPost.create({
      title,
      slug: finalSlug,
      excerpt: excerpt || "",
      content: content || "",
      tags: Array.isArray(tags) ? tags : [],
      coverImage: coverImage || null,
      published: !!published,
      publishedAt: published ? new Date() : null,
      author: req.user.id,
    });
    res.status(201).json(post);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ error: "A post with that slug already exists" });
    res.status(500).json({ error: e.message });
  }
});

// Admin: update post
router.put("/:id", requireAuth, async (req, res) => {
  try {
    const { title, slug, excerpt, content, tags, coverImage, published } = req.body;
    const existing = await BlogPost.findById(req.params.id);
    if (!existing) return res.status(404).json({ error: "Post not found" });

    existing.title = title ?? existing.title;
    existing.slug = slug ? slugify(slug) : existing.slug;
    existing.excerpt = excerpt ?? existing.excerpt;
    existing.content = content ?? existing.content;
    if (Array.isArray(tags)) existing.tags = tags;
    if (coverImage !== undefined) existing.coverImage = coverImage;

    if (published !== undefined) {
      existing.published = !!published;
      if (published && !existing.publishedAt) existing.publishedAt = new Date();
    }

    await existing.save();
    res.json(existing);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ error: "A post with that slug already exists" });
    res.status(500).json({ error: e.message });
  }
});

// Admin: toggle publish
router.patch("/:id/publish", requireAuth, async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  post.published = !post.published;
  if (post.published && !post.publishedAt) post.publishedAt = new Date();
  await post.save();
  res.json(post);
});

// Admin: delete post
router.delete("/:id", requireAuth, async (req, res) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json({ ok: true });
});

export default router;