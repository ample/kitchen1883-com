require 'rails_helper'

RSpec.describe User, type: :model do

  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }

  it 'should alias to_s' do
    user = build(:user)
    expect(user.to_s).to eq(user.email)
  end

end
