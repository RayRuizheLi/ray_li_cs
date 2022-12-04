import React, { useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';

import { AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa'

import { CodeBlock, dracula } from "react-code-blocks";

const TRACKING_ID = "G-6BZGFXL3E9"; 
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <h1 className="App-title">LRU Cache Sample Implementation</h1>
      <p className="App-intro">
          Welcome to Ray Li CS!<br></br><br></br><br></br>
      </p>
      <p className="App-intro">
          This is a simple proof of concept to see if people are interested to checkout
          the code implementation of a video C:<br></br><br></br>
      </p>
      <ul className="App-intro">
        <li><a className="App-link" href="https://www.tiktok.com/@raylics" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
        <li><a className="App-link" href="https://www.instagram.com/ray_li_cs/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /> Instagram</a></li>
        <li><a className="App-link" href="https://www.youtube.com/channel/UCB-49JQpv7TgtVlC1Rtu-0A" target="_blank" rel="noopener noreferrer"><AiOutlineYoutube /> YouTube</a></li>
      </ul>
      <body className="App-body">
        <CodeBlock
          text={sampleCode}
          language={"Python 3"}
          showLineNumbers={true}
          theme={dracula}
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

export default App;
