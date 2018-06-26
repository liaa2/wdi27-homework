require "pry"

#TODO: Research using "Struct" to create a new Class with simple attributes
# Node = Struct.new(:new, :next)

class SinglyLinkedList

  attr_accessor :head

  class Node
    attr_accessor :next, :value

    def initialize(value)
      @value = value
      @next = nil
      # yield self
    end
  end # Node

  def initialize(value)
    #create a new instance of the Node class, pass on the value to it, and set it as the @head of the list
    @head = Node.new(value)
  end
  # create a list from terminal after create Node classs and initialize method for SinglyLinkedList class:
  #   [1] pry(main)> list = SinglyLinkedList.new "Groucho"
  # => #<SinglyLinkedList:0x007fe65fa9a8b0 @head=#<SinglyLinkedList::Node:0x007fe65fa9a888 @next=nil, @value="Groucho">>

  #equivalent of .push()
  def append(value)
    #needs .last method
    #self.last
    last.next = Node.new(value)
  end

  # same as .unshift(value)
  def prepend(value)
    new_node = Node.new(value)
    new_node.next = @head
    @head = new_node
  end

  def last
    node = @head
    while node && node.next #while node is not nil && node.next is not nil
      node = node.next # i += 1
    end
    node #when node is nil, return the last node
  end

  def to_s
    output = ""
    node = @head
    while node
      output += node.value + ", "
      node = node.next
    end
    output
  end

  def at_index(n)
    # returns whole Node object at position n in list
    node = @head
    count = 0
    while node
      count+=1
      if n == count-1
        node
        break
      else
        node = node.next
      end
    end
    node
  end

  def find(needle)
    # returns whole Node object whose value == needle
    node = @head
    while node
      if node.value == needle
        node
        break
      else
        node = node.next
      end
    end
    node
  end

  def shift
    #removes the first element of the list and returns its value not the Node (destructive, i.e. changes list)
    node = @head
    output = node.value
    #assign @head to the next node
    @head = node.next
    output
  end

  def insert_after(node, value)
    #insert a new node after the given node argument, with the given value
    #returns new node
    new_node = Node.new(value)
    existing_node = node.next
    new_node.next = existing_node
    node.next = new_node
    new_node
  end

  def length
    #returns the length of the list
    count = 0
    node = @head
    while node
      count+=1
      node = node.next
    end
    count
  end

  def reverse
    # return a reversed version of the list, without changing list itself
  end

  def reverse!
    # destructive version: returns a reversed version of list, and sets list itself to that
  end

  def each(&block)
    #takes a block, and applies block to each node in list (i.e. node is provided as goalpost arg to block)
    #HINT: look up "yield"
    node = @head
    enum_for(:each)
    # return enum_for(:each) unless block_given?
    if block_given?
      while node
        yield node
        node = node.next
      end
    end
  end

  # bonus for the showoffs: map, inject
end

list = SinglyLinkedList.new "Groucho"
list.append "Harpo"
list.append "Chico"
list.prepend "Zeppo"
list.length
list.find("Zeppo")
list.at_index(1)
list.shift
list.each

binding.pry

puts "done"
