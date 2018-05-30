require 'pry'

# create a robot name using 2 letters and 3 numbers
# create a reset method to reset the name of the robot

class Robot

  # The initialize method will run as soon as an instance of the class has been created. it will store the variables that have been defined.
  def initialize
    @instruction_count = 0
    @name = make_name

    # we capture the current time with Time class.
    @created_at = Time.now
    @reset_at = Time.now
  end

  # This function will create the random name for the robot.
  def make_name
    # incrementing the count for each action the robot makes
    @instruction_count += 1
    # creating an array with an alphabetical range from A to Z then 'samples' two random letters
    robo_letters = ("A".."Z").to_a.sample(2)
    # creating an array with a numerical range from 0 to 9 then 'samples' three random letters
    robo_numbers = (0..9).to_a.sample(3)
    # Concatinating the two arrays together then stripping it from the array.
    name_pool = robo_letters.concat(robo_numbers).join
  end

  # this method will be able to call the name of the robot without resetting the name.
  def name
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1
    @name = make_name
    # resetting the @boot_date variable
    @reset_at = Time.now
    p "Rebooting Robot...."
  end

  # Timers - Give me the times since creation and last boot.
  def timers
    @instruction_count += 1
    p "Unit has been active for #{Time.now - @created_at} seconds. #{Time.now - @reset_at} since reboot cycle"
  end


end
binding.pry

# creating a new instance of the Robot class.
# Because we are using a class, we require the 'new' keyword.
r1 = Robot.new
