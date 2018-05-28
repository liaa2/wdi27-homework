# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Generating the serial killer list..."

Killer.destroy_all

Killer.create name:"Luis Garavito", country:"Colombia", years_active_from:1992, years_active_to:1999, proven_victims:138, notes:"Child-murderer, torture-killer, and rapist known as 'La Bestia' ('The Beast'). Confessed to killing 140 boys between 8 and 16 years old over a seven-year period in Colombia and neighboring countries. He is suspected of murdering over 300 victims, mostly street children."
Killer.create name:"Pedro López", country:"Colombia", years_active_from:1969, years_active_to:1979, proven_victims:110, notes:"Child-murderer and rapist, known as 'The Monster of the Andes'. Targeted young girls, between the ages of 8 and 12. Arrested in 1980 and convicted in 1983 of killing 3 young girls, but claimed to have killed hundreds. Despite being believed to be one of the most prolific serial killers of the 20th century, he was released in 1998. Current whereabouts unknown."
Killer.create name:"Daniel Camargo", country:"Colombia", years_active_from:1974, years_active_to:1986, proven_victims:72, notes:"Child and woman murderer, believed to have possibly raped and killed over 150 victims, primarily targeting female children as they were more likely to be virgins. Confessed to killing 72 victims. He strangled young girls in Colombia and was arrested, but he escaped from prison and he started killing in Ecuador; rearrested in 1986, he was incarcerated in the same Ecuadorian prison as 300+ serial killer Pedro López. Camargo was killed in jail by the nephew of one of his victims."
Killer.create name:"Pedro Rodrigues Filho", country:"Brazil", years_active_from:1967, years_active_to:2003, proven_victims:71, notes:"He has claimed to have killed over 100 victims, 47 of them inmates. He also killed his father and ate a piece of his heart. He killed his first two victims at the age of 14; he was first arrested in 1973. Convicted and sentenced to 128 years, but the maximum one can serve in Brazil is 30 years."
Killer.create name:"Yang Xinhai", country:"China", years_active_from:2000, years_active_to:2003, proven_victims:67, notes:"Known as the 'Monster Killer'. Would enter victims' homes at night and kill everyone with axes, meat cleavers, hammers, and shovels. Executed in February 2004."
Killer.create name:"Andrei Chikatilo", country:"Soviet Union", years_active_from:1978, years_active_to:1990, proven_victims:53, notes:"Known as 'The Butcher of Rostov', 'The Red Ripper' or 'The Rostov Ripper'. Convicted of the murder of 53 women and children between 1978 and 1990. One man was previously convicted and executed for his first murder. Executed in 1994."
Killer.create name:"Anatoly Onoprienko", country:"Soviet Union", years_active_from:1989, years_active_to:1996, proven_victims:52, notes:"Known as 'The Beast of Ukraine', 'The Terminator' and 'Citizen O'. Convicted of the murders of 9 people in 1989 and 43 people in 1995–1996. Traveled through Europe illegally from 1990 to 1995; whether he killed during this time is unknown. Sentenced to death, later commuted to life."

puts "created #{Killer.all.length}: "
puts Killer.all.pluck(:name).join(', ')
