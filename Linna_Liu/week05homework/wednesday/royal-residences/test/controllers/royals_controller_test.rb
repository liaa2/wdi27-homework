require 'test_helper'

class RoyalsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get royals_new_url
    assert_response :success
  end

  test "should get create" do
    get royals_create_url
    assert_response :success
  end

  test "should get index" do
    get royals_index_url
    assert_response :success
  end

  test "should get show" do
    get royals_show_url
    assert_response :success
  end

  test "should get edit" do
    get royals_edit_url
    assert_response :success
  end

  test "should get update" do
    get royals_update_url
    assert_response :success
  end

  test "should get destroy" do
    get royals_destroy_url
    assert_response :success
  end

end
