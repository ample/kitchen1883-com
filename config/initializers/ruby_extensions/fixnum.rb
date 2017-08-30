class Integer

  def to_bool
    return true if self == 1
    return false if zero?
    raise ArgumentError, "invalid value for Boolean: \"#{self}\""
  end

end
