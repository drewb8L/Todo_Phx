defmodule TodoPhx.Models.Todo do
  use Ecto.Schema
  import Ecto.Changeset
  @derive {Jason.Encoder, only: [:title, :complete, :id]}



  schema "todos" do
    field :complete, :boolean, default: false
    field :title, :string
    belongs_to :list, TodoPhx.Models.List
    timestamps()
  end

  @doc false
  def changeset(todo, attrs) do
    todo
    |> cast(attrs, [:title, :list_id, :complete])
    |> validate_required([:title, :complete])
  end
end
