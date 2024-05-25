/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify edge cases
    let dummy = new ListNode();
    let current = dummy;

    // Iterate through both lists
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes of list1 or list2
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // The merged list is next to the dummy node
    return dummy.next;
}

// Helper function to create linked lists from arrays
function createLinkedList(elements) {
    let dummy = new ListNode();
    let current = dummy;
    for (let element of elements) {
        current.next = new ListNode(element);
        current = current.next;
    }
    // console.log(JSON.stringify(current))
    return dummy.next;
}


