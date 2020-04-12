# CCoder

Project done by _ANURAG_ and _TEJA_

Deployed URL: https://ccoder.herokuapp.com

# Table Of Content
- [CCoder](#ccoder)
- [Table Of Content](#table-of-content)
- [About Our Project:](#about-our-project)
- [Features :](#features)
    - [\* Authentication](#authentication)
    - [**What A User Can Achieve From Our API**](#what-a-user-can-achieve-from-our-api)
      - [\* Basic Usages](#basic-usages)
      - [\* Challenge Creation](#challenge-creation)
      - [\* Contest Creation](#contest-creation)
- [Technologies used:](#technologies-used)

# About Our Project:

`Are you a code newbie?` 

`Learning to program is exhilarating and challenging... and also frustrating, exhausting, and overwhelming.
CCoder provides countless small wins. The exercises are achievable mini-quests: small and well-defined, and with enough complexity to uncover bite-sized knowledge gaps.
CCoder is a place built for anyone to practice and perfect their programming skills. Challenges are added almost every day so you can work on applying your skills`
    
# Features :

### \* Authentication

---
1.  User Registration
    a)  Local
    b)  Github OAuth
    c)  Google OAuth
2.  Email Verification for Registration.
3.  Password Reset. (Via Email Verification)
4.  Change Password.
5.  Restricitng User to use Weak Password With Express Validator
6.  Unique Username

### **What A User Can Achieve From Our API**

#### \* Basic Usages

---
1.  Can Register/Login With us.
      > POST https://ccoder.herokuapp.com/user/register
      > POST https://ccoder.herokuapp.com/user/login

3.
2.  Can Update his/her user detail,profile picture and password.
      > PATCH https://ccoder.herokuapp.com/user/userprofile/:token
          
3.  Can participate in Pre Currated Challenges Which Came Along With the API.
   
      (FOR ALL CHALLENGE)
      > GET https://ccoder.herokuapp.com/dashboard/challenges/:token
      
      (FOR SPECIFIC CHALLENGE)
      > GET https://ccoder.herokuapp.com/dashboard/challenges/:challengename/:token
      

4.  Can Code In Multiple Languages (Node,Python,Java,C,C++)
      > POST https://ccoder.herokuapp.com/submit/:challenge/:token
      
5.  Can Bookmark A Challenge
     (Add)
     > POST https://ccoder.herokuapp.com/:challenge/bookmark/add/:token
     
     (Delete)
      > DELETE https://ccoder.herokuapp.com/:challenge/bookmark/delete/:token
      
6.  Can Use Discussion Board of a Challenge.
     > POST https://ccoder.herokuapp.com/:challenge/discussion/:token

7.  Can see the Leaderboard of a Challenge.
     > GET https://ccoder.herokuapp.com/leaderboard/:challenge/:token

     
#### \* Challenge Creation

---
1.  Can Create His Own Challenge
     > POST https://ccoder.herokuapp.com/user/challenge/:token

2.  Can Add dynamic Test Cases For the challenge.
      > POST https://ccoder.herokuapp.com/testcase/:challenge/:token

3.  Can update/delete Challenges Made By Him.
     > PATCH https://ccoder.herokuapp.com/:challenge/update/:token

     > DELETE https://ccoder.herokuapp.com/:challenge/delete/:token

5.  Can Update/delete A testcase He Implemented in a Challenge.
     > PATCH https://ccoder.herokuapp.com/testcase/update/:challenge/:testCaseID/:token

     > DELETE https://ccoder.herokuapp.com/testcase/delete/:challenge/:testCaseID/:token 

#### \* Contest Creation

---
1.  Can Create A contest and set start and end time.
2.  Can Add Other User aswell as Moderator for a challenge
3.  Can Use Our Pre Curated Challenges or even can use the challenges made by him.
4.  All other User can Signup in a contest
5.  Only Signup user can Submit the code for a challenge
6.  Can Update Details of A contest
7.  Can Remove The moderator
8.  






9. **Aggregations** :
   - a. Sorting (as per Most Recent COntest).
   - b. Searching (_On the basis of keyword and location_) .
   - c. Pagination (_10 Jobs per page_).


# Technologies used:

---

- Nodemailer (_To send system generated emails_)
- Multer + Cloudinary (_Converting System Image into URL_)
- Express Js (_Framework for node Js_)
- Json Web token (_For Authentication_)
- Bcrypt Js (_For Hashing_)
- Mongoose (_To Connect to NoSQL Database_)
- Mark Down (_To Make our read me file look better_)

