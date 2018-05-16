puts "Building record of serial killers..."

Murderer.destroy_all

Murderer.create first_name: "Ted", last_name: "Bundy", age: 42, location: "United States", victim_type: "young women", kill_method: "blunt force trauma and strangulation", kill_count: 30, fate: "execution by electric chair"
Murderer.create first_name: "Andrei", last_name: "Chikatilo", age: 57, location: "Russia", victim_type: "children, young women", kill_method: "rape, mutilation, stabbing, cannibalism", kill_count: 56, fate: "execution by gunshot"
Murderer.create first_name: "Richard", last_name: "Kuklinski", age: 70, location: "United States", victim_type: "men", kill_method: "torture, shooting, stabbing, bludgeoning", kill_count: 215, fate: "heart attack during incarceration"


print "Created #{Murderer.all.length}: "
puts Murderer.all.pluck(:first_name).join(', ')