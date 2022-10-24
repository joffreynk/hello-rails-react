require 'test_helper'

class GreetingsViewControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get greetings_view_index_url
    assert_response :success
  end
end
