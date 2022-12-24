import React from 'react';
import './components_css/Question.css';
import { CodeBlock, dracula } from "react-code-blocks";
import Intro from './Intro';

function LRUCache() {
  return (

    <div className="Question">
      <h1 className="Question-title">LRU Cache Sample Implementation</h1>
      <Intro/>
      <body>
        <CodeBlock
          text={sampleCode}
          language={"Python 3"}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
        />
      </body>
    </div>
  );
}

let sampleCode = 
`class Node: 
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val 
        self.next = None 
        self.prev = None 
    
class LinkedList:
    def __init__(self):
        self.head = Node()
        self.tail = Node()
        
        self.head.next = self.tail 
        self.tail.prev = self.head
        
    def add_node(self, node):
        head_next = self.head.next
        head_next.prev = node      
        
        self.head.next = node 
        node.next = head_next 
        node.prev = self.head 
        
    def move_front(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev 
        
        self.add_node(node)
        
    def remove_from_back(self):
        key = self.tail.prev.key
        tail_prev = self.tail.prev 
        
        tail_prev.prev.next = tail_prev.next 
        tail_prev.next.prev = tail_prev.prev
        
        return key
    
    # Used for debugging 
    def pretty_print(self):
        cur = self.head 
        
        while cur:
            print(cur.key, cur.val)
            cur = cur.next
        
        print()


class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.record = dict() 
        self.linked_list = LinkedList() 

    def get(self, key: int) -> int:
        if key not in self.record:
            return -1
        
        self.linked_list.move_front(self.record[key])
        
        return self.record[key].val

    def put(self, key: int, value: int) -> None:
        if key in self.record:
            node = self.record[key]
            node.val = value 
            self.linked_list.move_front(node)
        else:
            node = Node(key, value)
            self.linked_list.add_node(node)
            self.record[key] = node
        
        if len(self.record) > self.capacity:
            key_remove = self.linked_list.remove_from_back()
            del self.record[key_remove]

`

export default LRUCache;
