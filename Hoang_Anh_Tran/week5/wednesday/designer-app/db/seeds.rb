# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Creating countries"

Country.destroy_all

a1 = Country.create name: 'Italy', image: 'http://www.sunislandtours.com.au/wp-content/uploads/2014/11/Italy-Country.jpg'
a2 = Country.create name: 'France', image: 'https://publicholidays.fr/wp-content/uploads/2012/12/France_1920_800_homepage.jpg'

a3 = Country.create name: 'America', image: 'https://media.timeout.com/images/103444978/630/472/image.jpg'


puts "Create #{Country.all.length} countries:"
puts Country.pluck(:name).join(', ')

puts "Creating brands"
Brand.destroy_all

Brand.create name: "Gucci", origin: "Florence, Italy", founded: "1921", image: 'https://media.gucci.com/style/DarkGray_Center_0_0_650x650/1480085109/421882_CVLEG_8605_001_075_0000_Light-Sylvie-small-shoulder-bag.jpg', country: a1

Brand.create name: "Fendi", origin: "Rome, Italy", founded: "1925", image: 'https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7a/P00292926.jpg', country: a1

Brand.create name: "Chanel", origin: "Paris, France", founded: "1909", image: 'https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/06/shutterstock_388684120-edited.jpg', country: a2

Brand.create name: "Balenciaga", origin: "Paris, France", founded: "1919", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzctIWlWxvXefCl-riPY-ZnwXluQ39vUm7m48k2etQqlI_J85X1w', country: a2

Brand.create name: "Kate Spades New York", origin: "New York, America", founded: "1993", image: 'https://images-na.ssl-images-amazon.com/images/I/714uYnbRzcL._UX395_.jpg', country: a3


puts "Created #{Brand.all.length} brands:"
puts Brand.pluck(:name).join(', ')
