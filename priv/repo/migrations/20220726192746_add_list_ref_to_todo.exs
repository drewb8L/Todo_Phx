defmodule TodoPhx.Repo.Migrations.AddListRefToTodo do
  use Ecto.Migration

  def change do
    alter table("todos") do
      add :list_id, references(:lists, on_delete: :delete_all)
    end
  end
end
