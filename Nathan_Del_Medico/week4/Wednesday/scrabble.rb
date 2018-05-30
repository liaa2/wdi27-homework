@types = ["one", "two", "three", "four", "five", "eight", "ten"]
@points = {
  "one" => [1,"a","e","i","o","u","l","n","r","s","t"],
  "two" => [2,"d","g"],
  "three" => [3,"b","c","m","p"],
  "four" => [4,"f","h","v","w","y"],
  "five" => [5,"k"],
  "eight" => [8,"j","x"],
  "ten" => [10,"q","z"]
};
def scrabble(word)
  word.downcase!
  score = 0
  word.each_char do |letter|
    @types.each do |point|
      @points[point].each do |letters|
        if letter == letters
          score += @points[point][0]
        end
      end
    end
  end
  puts "Total score: #{score}"
end

scrabble("jkfh")
@points2 = ["a","e","i","o","u","l","n","r","s","t","d","g", "", "", "", "", "", "", "", "","b","c","m","p", "", "", "", "", "", "","f","h","v","w","y", "", "", "", "", "","k", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "","j","x", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "","q","z", "", "", "", "", "", "", "", "", "", ""]
def scrabble2(word)
  word.downcase!
  score = 0
  word.each_char do |letter|
    @points2.each_with_index do |letters, i|
      if letter == letters
        score += ((i+10)/10).to_i
      end
    end
  end
  puts "Total score: #{score}"
end
scrabble2("cabbage")
