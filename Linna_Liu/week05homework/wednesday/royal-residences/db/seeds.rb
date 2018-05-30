# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Royal.destroy_all

puts "Creating royals..."


Royal.create name:"Charles Philip Arthur George", dob:"1948/11/14", spouse:"Camilla Parker Bowles", title:"His Royal Highness Prince Charles Philip Arthur George, Prince of Wales, KG, KT, GCB, OM, AK, QSO, PC, ADC, Earl of Chester, Duke of Cornwall, Duke of Rothesay, Earl of Carrick, Baron of Renfrew, Lord of the Isles and Prince and Great Steward of Scotland", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/1280px-HRH_Prince_Charles_43_Allan_Warren.jpg"
Royal.create name:"William Arthur Philip Louis", dob:"1982/06/21", spouse:"	Catherine Middleton", title:"His Royal Highness The Duke of Cambridge", image:"https://www.maxim.com/.image/t_share/MTUyOTI0OTgyNTgwNzUwMDY1/prince-william-bald-3.jpg"
Royal.create name:"Henry Charles Albert David", dob:"1984/09/15", spouse:"Coming soon in 2 days", title:"His Royal Highness Prince Henry of Wales", image:"https://thenypost.files.wordpress.com/2017/06/prince-harry-feature.jpg?quality=90&strip=all"


puts "Created #{Royal.all.length} royals:"
puts Royal.pluck(:name).join(', ')
