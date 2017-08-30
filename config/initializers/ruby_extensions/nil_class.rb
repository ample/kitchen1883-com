class NilClass

  def +(other)
    convert_to_match(other) + other
  end

  def to_bool
    false
  end

  private

    def convert_to_match(obj)
      return to_s if obj.is_a?(String)
      return to_i if obj.is_a?(Integer)
      to_f
    end

end
