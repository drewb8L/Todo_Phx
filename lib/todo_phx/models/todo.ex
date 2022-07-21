defmodule TodoPhx.Models.Todo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "todos" do
    field :complete, :boolean, default: false
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(todo, attrs) do
    todo
    |> cast(attrs, [:title, :complete])
    |> validate_required([:title, :complete])
  end
end
