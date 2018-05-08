# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

def bmi_calculator
  puts "Please etner your weight in kg."
  weight = gets.chomp.to_f

  puts "Please enter your height in cm."
  height = gets.chomp.to_f

  bmi = weight/((height/100)**2)
  puts bmi

  case
  when bmi<15
    puts "Very severely underweight."
  when bmi>=15 && bmi<=16
    puts "Severely underweight."
  when bmi>16 && bmi<=18.5
    puts "Underweight."
  when bmi>18.5 && bmi<=25
    puts "Normal."
  when bmi>25 && bmi<=30
    puts "Overweight."
  when bmi>30 && bmi<=35
    puts "Moderately obese."
  when bmi>35 && bmi<=40
    puts "Severely obese"
  when bmi>40
    puts "Very severely obese."
  else
    puts "invalid."
  end
end


bmi_calculator
