READ ME: Below is the Testing Documentation for CWRUSale. Fill out relevant information along with the date of testing and who did the testing. 
Notes include what needs to be fixed before the next round of testing. The tests are modeled after the functional testing document. 
Below is a sample that may be copied and pasted to document each test

------------------------------SAMPLE---------------------------------
11/DATE/21 [Amy/Alena]
Tests Run:
Submit New Item Tests.   | Failed: 
Request Item Tests.      | Failed: 
Delete Request/Item Tests| Failed: 
Search Item Tests        | Failed: 

Total Stats: 
Notes:
---------------------------------------------------------------------


START TESTING DOCUMENTATION BELOW, SEPEARATE WITH LINES.

---------------------------------------------------------------------
11/17/21 Amy
Tests Run:
Submit New Item Tests.   | Failed: 1
Request Item Tests.      | Failed: 0
Delete Request/Item Tests| Failed: 0
Search Item Tests        | Failed: 0

Total Stats: 16/17
Notes: Changed the Notification system so that even though that part isnt currently fucntional, it comes out as false when nothing is sent so another test
is passed. Still need to make it so that when a request item is found, the phone number is able to send a message. 
---------------------------------------------------------------------
11/16/21 Amy 
Tests Run:
Submit New Item Tests.   | Failed: 2
Request Item Tests.      | Failed: 0
Delete Request/Item Tests| Failed: 0
Search Item Tests        | Failed: 0

Total Stats: 15/17
Notes: Notification is still not working.
---------------------------------------------------------------------
11/16/21 Amy 
Tests Run:
Submit New Item Tests.   | Failed: 2
Request Item Tests.      | Failed: 0
Delete Request/Item Tests| Failed: 0
Search Item Tests        | Failed: 2

Total Stats: 13/17
Notes: Focus on making it so that the array is sent through the search item. I think that is why this part is not working. then it must go
through to the front end and display
---------------------------------------------------------------------
11/16/21 Amy 
Tests Run:
Submit New Item Tests.   | Failed: 2
Request Item Tests.      | Failed: 0
Delete Request/Item Tests| Failed: 0
Search Item Tests        | Failed: 3

Total Stats: 12/17
Notes: search item is not working properly. i think that it is the SQL i cannot find out how to make it so that
the code finds just the ones in the same category. to fix this make sure that it is searching and not editing any of the entries
---------------------------------------------------------------------
11/15/21 Amy 
Tests Run:
Submit New Item Tests.   | Failed: 3
Request Item Tests.      | Failed: 0
Delete Request/Item Tests| Failed: 2
Search Item Tests        | Failed: 3

Total Stats: 9/17
Notes:having trouble using the delete feature. it is not able to delete and item and cannot differentiate between an item that is an actual item vs. is 
a request entry. then must delete from the data base
---------------------------------------------------------------------
11/14/21 Amy 
Tests Run:
Submit New Item Tests.   | Failed: 2
Request Item Tests.      | Failed: 0
Delete Request/Item Tests| Failed: 3
Search Item Tests        | Failed: 3

Total Stats: 8/17
Notes: Delete the requested items needs to be changed. Find something online that will make it so that it will work. Also, there is differing inputs between
some of the trigger functions so they need to be on the same page for everything to work. 
