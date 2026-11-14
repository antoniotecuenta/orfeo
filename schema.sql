-- Orfeo: una fila por usuario con todas sus sesiones. Va en el mismo proyecto que Bestiario.
-- Pégalo en Supabase → SQL Editor → New query → Run.
create table if not exists public.orfeo (
  user_id     uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  data        jsonb not null,
  actualizado bigint not null default 0,
  updated_at  timestamptz not null default now()
);

alter table public.orfeo enable row level security;

drop policy if exists "orfeo_leer"   on public.orfeo;
drop policy if exists "orfeo_crear"  on public.orfeo;
drop policy if exists "orfeo_editar" on public.orfeo;

create policy "orfeo_leer"   on public.orfeo for select to authenticated using (auth.uid() = user_id);
create policy "orfeo_crear"  on public.orfeo for insert to authenticated with check (auth.uid() = user_id);
create policy "orfeo_editar" on public.orfeo for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
