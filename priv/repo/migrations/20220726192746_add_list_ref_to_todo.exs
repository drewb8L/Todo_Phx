defmodule TodoPhx.Repo.Migrations.AddListRefToTodo do
  use Ecto.Migration

  def change do
    alter table("todos") do
      add :list_id, references(:lists)
    end
  end
end
