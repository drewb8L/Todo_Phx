defmodule TodoPhx.ModelsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `TodoPhx.Models` context.
  """

  @doc """
  Generate a todo.
  """
  def todo_fixture(attrs \\ %{}) do
    {:ok, todo} =
      attrs
      |> Enum.into(%{
        complete: true,
        title: "some title"
      })
      |> TodoPhx.Models.create_todo()

    todo
  end
end
