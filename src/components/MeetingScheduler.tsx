import React from 'react';
import './components_css/Question.css';
import { CodeBlock, dracula } from "react-code-blocks";
import Intro from './Intro';

function MeetingScheduler() {
  return (
    <div className="Question">
      <h1 className="Question-title">Meeting Scheduler Sample Implementation</h1>
      <Intro/>
      <body>
        <p className="Question-subtitle">
            Two pointers With If Statement Implmentation
        </p>
        <CodeBlock
          text={twoPointerSampleCode}
          language={"Python 3"}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
        />
        <p className="Question-subtitle">
            Min-Heap Implmentation
        </p>
        <CodeBlock
          text={minHeapSampleCode}
          language={"Python 3"}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
        />
      </body>
    </div>
  );
}

let twoPointerSampleCode = 
`class Solution:
def minAvailableDuration(self, slots1: List[List[int]], slots2: List[List[int]], duration: int) -> List[int]:
    # we keep track of slots one and slots two and 
    #  check if the overlaps of the two slots 
    #  are more than minAvailableDuration

    slots1.sort()
    slots2.sort()

    def find_intersect(start1, end1, start2, end2):
        if start2 < start1 :
            start1, end1, start2, end2 = start2, end2, start1, end1 

        if end1 < start2:
            return 0, 0

        if end1 >= end2:
            return end2 - start2, start2 

        return end1 - start2, start2 
    
    p1 = 0 
    p2 = 0 

    slot = []

    while p1 < len(slots1) and p2 < len(slots2):
        start1, end1 = slots1[p1]
        start2, end2 = slots2[p2]

        intersect, begin = find_intersect(start1, end1, start2, end2)
        print(intersect)

        if intersect >= duration:
            slot = [begin, begin + duration]
            break
        else:
            if start1 <= start2 and end2 <= end1:
                p2 += 1 
            elif start2 <= start1 and end1 <= end2:
                p1 += 1 
            elif start2 < start1:
                p2 += 1 
            else:
                p1 += 1 

    return slot 

`

let minHeapSampleCode = 
`import heapq

class Solution:
    def minAvailableDuration(self, slots1: List[List[int]], slots2: List[List[int]], duration: int) -> List[int]:
        slots = []

        def insert_slots(bunch):
            for slot in bunch:
                if slot[1] - slot[0] >= duration:
                    heapq.heappush(slots, slot)

        insert_slots(slots1)
        insert_slots(slots2)

        while len(slots) > 1:
            cur = heapq.heappop(slots)
            next_s = slots[0]

            if cur[1] - next_s[0] >= duration:
                return [next_s[0], next_s[0] + duration]

        return []

`

export default MeetingScheduler;
