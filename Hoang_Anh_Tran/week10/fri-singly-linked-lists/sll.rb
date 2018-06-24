#!/usr/bin/env ruby
require 'pry'

#TODO: Research using 'Struct' to create a new Class with simple attributes
# Node = Struct.new(:value, :next)


class SinglyLinkedList

  attr_accessor :head

  class Node
    attr_accessor :next, :value

    def initialize(value)
      @value = value
      @next = nil
    end

  end # end node

  def initialize( value )
    # create a new instance of the Node class, pass on the value to it, and set it as the @head of the list.
    @head = Node.new( value )
  end

  # equivalent of .push()
  def append( value )
    # need .last method
    # self.last
    last.next = Node.new(value)
  end

  def prepend(value)
    new_node = Node.new(value)
    new_node.next = @head
    @head = new_node
  end

  def last
    node = @head
    while node && node.next
      node = node.next # i = i +1
    end
    node
  end

  def to_s
    output = ''
    node = @head
    while node
      output += node.value + ', '
      node = node.next
    end
    output
  end

  def at_index(n)
    # returns Node object at position n in List
    result = traverse_until { |node, i| i == n }
    result[:node]
  end

  def find(needle)
    # returns Node object whose value === needle
    result = traverse_until { |node, index| node.value == needle }
    result[:node]
  end

  def shift
    head = @head
    @head = @head.next
    head.next = nil
    head
  end

  def insert_after(node, value)
    #insert a new node after the given node arguement, with the given value
    # returns new node
  end

  def length
    last_node = traverse_until { |node, index| node.next.nil? }
    last_node[:index]
    # returns the length of the list
  end

  def reverse
    # 
  end

  def reverse!
    previous = nil
    current = @head

    while current != nil
      next_node = current.next
      current.next = previous
      previous = current
      current = next_node
    end

    @head = previous
  end

  def each
    # takes a block, and applies block to each node in list (ie node is provided as goalpost arg to block)
    # look up yield
    node = @head
    until node.nil?
      yield node.value
      node = node.next
    end
  end

  # bonus: map, inject

  def traverse_until
    current = @head
    index = 0
    until current.next.nil? || yield(current, index)
      current = current.next
      index += 1
    end
    {node: current, index: index}
  end

end

list = SinglyLinkedList.new 'Groucho'
list.append 'Harpo'
list.append 'Chico'
list.prepend 'Zeppo'

list.reverse

#binding.pry

puts 'done'
