import { createClient } from "@supabase/supabase-js";
//#region src/integrations/supabase/client.ts
function createSupabaseClient() {
	return createClient("https://ahemxhvqvcwfdgbvwtha.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZW14aHZxdmN3ZmRnYnZ3dGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MDc3OTQsImV4cCI6MjA5NzE4Mzc5NH0.n3Gt1zOpn__Q7ndYymLQ8AVmVBSAXJzuwLtY8UuazRc", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
