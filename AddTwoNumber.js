/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let dummyHead = new ListNode(0);
    let a=l1, b=l2, curr=dummyHead;
    let carry=0;
    while (a!=null || b!=null){
        let x = (a!=null)? a.val:0;
        let y = (b!=null)? b.val:0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode (sum % 10);
        curr = curr.next;
        if (a!=null) a = a.next;
        if (b!=null) b = b.next;
    }
    if (carry>0){
        curr.next = new ListNode (carry);
    }
    return dummyHead.next;
};
