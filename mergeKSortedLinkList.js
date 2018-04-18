/**
 * Definition for singly-linked list.*/
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeLinkList(lists){
    return merge(lists,0,lists.length-1);
}

/**
 * @param {ListNode[]} lists
 * @param {Number} start
 * @param {Number} end
 * @return {ListNode}
 */
function merge(lists,start,end){
    if(start===end){
        return lists[start];
    }
    if(start>end){
        return null;
    }
    let mid = Math.floor((start+end)/2);
    let a = merge(lists,start,mid);
    let b = merge(lists,mid+1,end);
    let head = new ListNode(0);
    let current = head;
    while(a!=null &&b!=null){
        if(a.val<b.val){
            current.next = a;
            a=a.next;
        }else{
            current.next=b;
            b=b.next;
        }
        current =current.next;
    }
    current.next = (a!==null) ? a:b;
    return head.next;  
}


let ls =[];
let l1= new ListNode(2);
l1.next = new ListNode (3);
l1.next.next = new ListNode(5);
ls.push(l1);
let l2= new ListNode(5);
l2.next = new ListNode (7);
l2.next.next = new ListNode(10);
ls.push(l2);
let l3 = new ListNode(4);
ls.push(l3);


console.log(mergeLinkList(ls));