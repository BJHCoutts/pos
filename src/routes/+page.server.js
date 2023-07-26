import { supabase } from "$lib/supabaseClient";

export async function load() {

	const { data, error } = await supabase.from("menu").select();

	if (error) { return console.error(error) }

	return {
		menu: data ?? [],
	};
}

