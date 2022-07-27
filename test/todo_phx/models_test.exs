defmodule TodoPhx.ModelsTest do
  use TodoPhx.DataCase

  alias TodoPhx.Models

  describe "todos" do
    alias TodoPhx.Models.Todo
    alias TodoPhx.Models.List
    import TodoPhx.ModelsFixtures

    @invalid_attrs %{complete: nil, title: nil}
    @invalid_list_attrs %{name: nil}
    test "list_todos/0 returns all todos" do
      todo = todo_fixture()
      assert Models.list_todos() == [todo]
    end

    test "get_list_and_todos/1 returns a list with given id" do
      list = list_fixture()
      assert Models.get_list_and_todos(list.id) == list
    end

    test "create_list/1 creates a list when given valid data" do
      valid_attrs = %{name: "New List"}
      assert {:ok, %List{}} = Models.create_list(valid_attrs)
    end

    test "create_list/1 should return an error changeset given invalid data" do
      assert {:error, %Ecto.Changeset{}} = Models.create_list(@invalid_list_attrs)
    end

    test "update_list/2 with valid data updates the todo" do
      list = list_fixture()
      update_attrs = %{name: "Updated Name"}

      assert {:ok, %List{} = list} = Models.update_list(list, update_attrs)
      assert list.name == "Updated Name"
    end



    test "update_list/2 with invalid data returns error changeset" do
      list = list_fixture()
      assert {:error, %Ecto.Changeset{}} = Models.update_list(list, @invalid_list_attrs)
    end

    test "delete_list/1 deletes the todo" do
      list = list_fixture()
      assert {:ok, %List{}} = Models.delete_list(list)
      assert_raise Ecto.NoResultsError, fn -> Models.get_list_and_todos(list.id) end
    end


    test "get_todo!/1 returns the todo with given id" do
      todo = todo_fixture()
      assert Models.get_todo!(todo.id) == todo
    end

    test "create_todo/1 with valid data creates a todo" do
      valid_attrs = %{complete: true, title: "some title"}

      assert {:ok, %Todo{} = todo} = Models.create_todo(valid_attrs)
      assert todo.complete == true
      assert todo.title == "some title"
    end

    test "create_todo/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Models.create_todo(@invalid_attrs)
    end

    test "update_todo/2 with valid data updates the todo" do
      todo = todo_fixture()
      update_attrs = %{complete: false, list_id: todo.list_id, title: "some updated title"}

      assert {:ok, %Todo{} = todo} = Models.update_todo(todo, update_attrs)
      assert todo.complete == false
      assert todo.title == "some updated title"
    end

    test "update_todo/2 with invalid data returns error changeset" do
      todo = todo_fixture()
      assert {:error, %Ecto.Changeset{}} = Models.update_todo(todo, @invalid_attrs)
      assert todo == Models.get_todo!(todo.id)
    end

    test "delete_todo/1 deletes the todo" do
      todo = todo_fixture()
      assert {:ok, %Todo{}} = Models.delete_todo(todo)
      assert_raise Ecto.NoResultsError, fn -> Models.get_todo!(todo.id) end
    end

    test "change_todo/1 returns a todo changeset" do
      todo = todo_fixture()
      assert %Ecto.Changeset{} = Models.change_todo(todo)
    end
  end
end
