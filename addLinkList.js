/**
 * Definition for singly-linked list.*/
  function ListNode(val) {
      this.val = val;
     this.next = null;
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let sum = result;
    let carry = 0;
    while(l1||l2||carry !=0){
        let s = ((l2 == null) ? 0 : l2.val) + ((l1 == null) ? 0 : l1.val) + carry;
        let cur = new ListNode(s % 10);
        carry = Math.floor(s / 10);
        result.next = cur;
        result = cur;
        l1 = l1.next;
        l2 = l2.next;
    }
    return sum.next ;
};

let l1= new ListNode(2);
l1.next = new ListNode (4);
l1.next.next = new ListNode(3);

let l2= new ListNode(5);
l2.next = new ListNode (6);
l2.next.next = new ListNode(4);
let sum = addTwoNumbers(l1,l2);
console.log(sum);
