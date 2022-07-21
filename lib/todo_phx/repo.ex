defmodule TodoPhx.Repo do
  use Ecto.Repo,
    otp_app: :todo_phx,
    adapter: Ecto.Adapters.Postgres
end
