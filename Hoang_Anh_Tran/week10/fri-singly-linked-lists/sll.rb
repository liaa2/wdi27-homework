#!/usr/bin/env ruby
require 'pry'

#TODO: Research using 'Struct' to create a new Class with simple attributes
# Node = Struct.new(:value, :next)


class SinglyLinkedList

  include Enumerable

  attr_accessor :head

  class Node
    attr_accessor :next, :value

    def initialize(value)
      @value = value
      @next = nil
    end
  end # end node

  def initialize( value=nil )
    # create a new instance of the Node class, pass on the value to it, and set it as the @head of the list.
    @head = Node.new( value ) if value
  end

  # equivalent of .push()
  def append( value )
    # need .last method
    # self.last
    last.next = Node.new(value)
  end

  # similar to unshift(value)
  def prepend(value)
    new_node = Node.new(value)
    new_node.next = @head
    @head = new_node
  end

  alias_method :unshift, :prepend

  def last
    node = @head
    while node && node.next
      node = node.next # i += 1
    end
    node
  end

  def to_s
    output = ''
    # node = @head
    # while node
    #   output += node.value + ', '
    #   node = node.next
    # end
    each do |node|
      output += node.value
      output += ', ' unless node.next == nil
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


    # result = traverse_until { |node, index| node.value == needle }
    # result[:node]

    # node = @head
    # while node
    #   return node if node.value == needle
    #   node = node.next
    # end


    each { |node| return node if node.value == needle}

  end


  def shift
    # remove the first element of the list and retuns its value (destructive, ie, changes list)
    old_head = @head
    old_head.next = nil # break connection to the list
    @head = @head.next
    old_head
  end



  def insert_after(node, value)
    #insert a new node after the given node arguement, with the given value
    # returns new node
    new_node = Node.new value
    new_node.next = node.next
    node.next = new_node
  end

  def to_a
    # turn our SLL into an array of values and return it

    arr = []
    # node = @head
    # while node
    #   arr << node.value
    #   node = node.next
    # end

    each {|node| arr << node.value}
    arr
  end

  def array_to_list(arr)
    # ???
  end

  def length
    # last_node = traverse_until { |node, index| node.next.nil? }
    # last_node[:index]

    # returns the length of the list

    # node = @head
    n = 0
    # while node
    #   n += 1
    #   node = node.next
    # end


    each { n += 1}
    n # when node is falsy, returns n
  end


  # No need for this anymore, since we have 'Emunerable'
  # def reverse
  #   #return a reversed version of the list, without changing the list itself
  #
  #   # one way to avoid the 'nil'
  #   # reversed = SinglyLinkedList.new @head.value
  #   # node = @head.next
  #
  #   # this requires the value for the initialize method to be optional
  #   # reversed = SinglyLinkedList.new
  #   # node = @head
  #   #
  #   # while node
  #   #   # takes each node from the current list in forward order, and prepend it to the new List
  #   #   # automatically reverses
  #   #   reversed.prepend node.value
  #   #   node = node.next
  #   # end
  #
  #   reversed = SinglyLinkedList.new
  #   each { |node| reversed.prepend node.value }
  #   reversed
  # end
  #
  # def reverse!
  #   # previous = nil
  #   # current = @head
  #   #
  #   # while current != nil
  #   #   next_node = current.next
  #   #   current.next = previous
  #   #   previous = current
  #   #   current = next_node
  #   # end
  #   #
  #   # @head = previous
  #   @head = reverse.head
  # end

  def each
    # takes a block, and applies block to each node in list (ie node is provided as goalpost arg to block)
    # look up yield

    return nil unless block_given?
    node = @head
    index = 0
    while node
      yield node, index # node becomes first goalpost arg to block
      node = node.next
      index += 1
    end
  end

  def at_index(ind)
    each { |node, index| return node if index == n }
  end

  # bonus: map, inject

  # def map
  #   return nil unless block_given?
  #   arr = [] # TODO: return a list instead?
  #   each { |node| arr << yield(node) }
  #   arr
  # end


end # end SinglyLinkedList

list = SinglyLinkedList.new 'Groucho'
list.append 'Harpo'
list.append 'Chico'
list.prepend 'Zeppo'

# list.reverse

binding.pry

puts 'done'
