const questions = [
    {
        "question": "1. The tangent at the point (2 ,–2) to the curve 4x^2 - 2xy = y^2 does not pass through the point _____",
        "options": ["(–2, –7)", "(–4, –9)", "(4, 3)", "(8, 5)"],
        "answer": "(–4, –9)"
      },
      {
        "question": "2. The equation of the tangent at (0, 1) to the curve x^2 + y^2 = 1 is _____",
        "options": ["x + y = 1", "x - y = 1", "x + y = 2", "x - y = 2"],
        "answer": "x + y = 1"
      },
      {
        "question": "3. The equation of the tangent to the curve y = x^2 at x = 1 is _____",
        "options": ["y = 2x - 1", "y = x + 1", "y = 2x + 1", "y = x^2 - 2x + 1"],
        "answer": "y = 2x - 1"
      },
      {
        "question": "4. If the line y = mx + c is tangent to the curve y = x^2 at x = 2, the value of m is _____",
        "options": ["4", "3", "2", "1"],
        "answer": "4"
      },
      {
        "question": "5. The length of the tangent from the point (4, 3) to the circle x^2 + y^2 - 4x - 6y + 9 = 0 is _____",
        "options": ["2", "3", "4", "5"],
        "answer": "2"
      },
      {
        "question": "6. The equation of the tangent to the curve y^2 = 4x at the point (1, 2) is _____",
        "options": ["x + y = 3", "x - y = 3", "x + y = 2", "x - y = 2"],
        "answer": "x + y = 3"
      },
      {
        "question": "7. The equation of the tangent to the circle x^2 + y^2 - 6x - 8y + 9 = 0 at the point (3, 4) is _____",
        "options": ["3x + 4y = 25", "4x + 3y = 25", "x + y = 7", "x + y = 9"],
        "answer": "3x + 4y = 25"
      },
      {
        "question": "8. The equation of the tangent to the curve x^3 + y^3 = 3axy at the point (a, a) is _____",
        "options": ["x + y = 2a", "x - y = 2a", "x + y = a", "x - y = a"],
        "answer": "x + y = 2a"
      },
      {
        "question": "9. If the line y = mx + c is a tangent to the curve y = x^2 at x = 2, the value of c is _____",
        "options": ["-2", "2", "-1", "1"],
        "answer": "-2"
      },
      {
        "question": "10. The equation of the tangent to the curve y = sin(x) at x = π/2 is _____",
        "options": ["y = x", "y = x - π/2", "y = x + 1", "y = 1"],
        "answer": "y = 1"
      },
      {
        "question": "11. The slope of the tangent to the curve y = x^3 at x = 2 is _____",
        "options": ["6", "4", "8", "12"],
        "answer": "12"
      },
      {
        "question": "12. The equation of the tangent to the curve y = cos(x) at x = 0 is _____",
        "options": ["y = 1", "y = x", "y = x + 1", "y = -x"],
        "answer": "y = 1"
      },
      {
        "question": "13. The equation of the tangent to the curve y = x^2 at the point (2, 4) is _____",
        "options": ["y = 2x", "y = 4x", "y = 2x + 2", "y = 4x - 4"],
        "answer": "y = 4x - 4"
      },
      {
        "question": "14. The slope of the tangent to the curve y = x^2 + 2x at x = 1 is _____",
        "options": ["2", "3", "4", "5"],
        "answer": "4"
      },
      {
        "question": "15. The equation of the tangent to the curve y = x^2 - 4x + 3 at x = 1 is _____",
        "options": ["y = 2x - 1", "y = 2x - 3", "y = 2x + 1", "y = 2x + 3"],
        "answer": "y = 2x - 1"
      },
      {
        "question": "16. The equation of the tangent to the curve y = x^2 at the point (0, 0) is _____",
        "options": ["y = x", "y = 0", "y = 2x", "y = x^2"],
        "answer": "y = 0"
      },
      {
        "question": "17. The equation of the tangent to the curve y = 2x^3 at x = 1 is _____",
        "options": ["y = 2x - 1", "y = 6x - 2", "y = 4x - 2", "y = 2x + 1"],
        "answer": "y = 6x - 2"
      },
      {
        "question": "18. The equation of the tangent to the curve y = ln(x) at x = 1 is _____",
        "options": ["y = 1", "y = x + 1", "y = x", "y = x - 1"],
        "answer": "y = x"
      },
      {
        "question": "19. The tangent to the curve y = e^x at x = 0 passes through the point _____",
        "options": ["(0, 1)", "(1, 1)", "(0, 0)", "(1, 0)"],
        "answer": "(0, 1)"
      },
      {
        "question": "20. The equation of the tangent to the curve y = x^3 + x^2 at x = 1 is _____",
        "options": ["y = 3x + 1", "y = 2x + 1", "y = 4x + 1", "y = x^2 + 3x + 1"],
        "answer": "y = 3x + 1"
      },
      {
        "question": "21. The equation of the tangent to the curve y = x^2 - 3x + 2 at x = 2 is _____",
        "options": ["y = x - 2", "y = 2x - 2", "y = 2x - 3", "y = 4x - 6"],
        "answer": "y = 2x - 2"
      },
      {
        "question": "22. The slope of the tangent to the curve y = x^2 at x = 1 is _____",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question": "23. The tangent to the curve y = x^2 + 3x + 2 at the point (1, 6) is _____",
        "options": ["y = 2x + 4", "y = 2x + 2", "y = x + 6", "y = 3x + 3"],
        "answer": "y = 2x + 4"
      },
      {
        "question": "24. The equation of the tangent to the curve y = sin(x) at x = π/4 is _____",
        "options": ["y = x", "y = x - 1", "y = x + 1", "y = 2x"],
        "answer": "y = x - 1"
      },
      {
        "question": "25. The tangent to the curve y = e^x at the point (0, 1) is _____",
        "options": ["y = x", "y = 1", "y = 2x", "y = 2x + 1"],
        "answer": "y = 1"
      },
      {
        "question": "26. The equation of the tangent to the curve y = x^2 + 4x at x = 0 is _____",
        "options": ["y = 4x", "y = 4x + 4", "y = 4x - 4", "y = x"],
        "answer": "y = 4x"
      },
      {
        "question": "27. The equation of the tangent to the curve y = x^3 at the point (1, 1) is _____",
        "options": ["y = 3x - 2", "y = 3x - 1", "y = x + 1", "y = x - 1"],
        "answer": "y = 3x - 2"
      },
      {
        "question": "28. The equation of the tangent to the curve y = tan(x) at x = 0 is _____",
        "options": ["y = x", "y = 1", "y = x + 1", "y = 0"],
        "answer": "y = x"
      },
      {
        "question": "29. The equation of the tangent to the curve y = x^2 - x + 1 at x = 1 is _____",
        "options": ["y = 2x", "y = 2x - 2", "y = 3x - 1", "y = x - 1"],
        "answer": "y = 2x - 2"
      },
      {
        "question": "30. The equation of the tangent to the curve y = x^3 + x^2 at x = 0 is _____",
        "options": ["y = x^2", "y = x", "y = 2x", "y = 0"],
        "answer": "y = 0"
      },
      {
        "question": "31. The equation of the tangent to the curve y = cos(x) at x = π/2 is _____",
        "options": ["y = 1", "y = 2x", "y = x", "y = 0"],
        "answer": "y = 0"
      },
      {
        "question": "32. The equation of the tangent to the curve y = ln(x) at x = 1 is _____",
        "options": ["y = x", "y = 1", "y = x + 1", "y = x - 1"],
        "answer": "y = x"
      },
      {
        "question": "33. The equation of the tangent to the curve y = x^2 + x + 1 at x = 0 is _____",
        "options": ["y = x", "y = 2x + 1", "y = x + 1", "y = x^2 + 1"],
        "answer": "y = 1"
      },
      {
        "question": "34. The equation of the tangent to the curve y = e^x at x = 1 is _____",
        "options": ["y = e^x", "y = e^x + 1", "y = 2e^x", "y = e^x - 1"],
        "answer": "y = e^x"
      },
      {
        "question": "35. The equation of the tangent to the curve y = cos(x) at x = 0 is _____",
        "options": ["y = 1", "y = x", "y = -x", "y = x - 1"],
        "answer": "y = 1"
      },
      {
        "question": "36. The equation of the tangent to the curve y = 1/x at x = 1 is _____",
        "options": ["y = x - 1", "y = 2x", "y = x + 1", "y = 2"],
        "answer": "y = 2"
      },
      {
        "question": "37. The equation of the tangent to the curve y = x^2 at x = 3 is _____",
        "options": ["y = 6x - 9", "y = 3x - 9", "y = 2x + 6", "y = 6x + 9"],
        "answer": "y = 6x - 9"
      },
      {
        "question": "38. The equation of the tangent to the curve y = 3x^2 at x = 2 is _____",
        "options": ["y = 12x - 12", "y = 12x - 24", "y = 4x + 2", "y = 12x - 8"],
        "answer": "y = 12x - 12"
      },
      {
        "question": "39. The equation of the tangent to the curve y = e^x at x = 1 is _____",
        "options": ["y = e^x", "y = e^x + 1", "y = e^x - 1", "y = 2x + 1"],
        "answer": "y = e^x"
      },
      {
        "question": "40. The equation of the tangent to the curve y = sin(x) at x = π/2 is _____",
        "options": ["y = 1", "y = x", "y = x - 1", "y = -x"],
        "answer": "y = 1"
      },
      {
        "question": "41. The equation of the tangent to the curve y = tan(x) at x = π/4 is _____",
        "options": ["y = x + 1", "y = x", "y = x + 2", "y = x + 3"],
        "answer": "y = x"
      },
      {
        "question": "42. The equation of the tangent to the curve y = x^2 at the point (1, 1) is _____",
        "options": ["y = 2x", "y = x", "y = 2x + 1", "y = 1"],
        "answer": "y = 2x - 1"
      },
      {
        "question": "43. The equation of the tangent to the curve y = x^3 at x = 2 is _____",
        "options": ["y = 2x^2", "y = 4x", "y = 6x", "y = 8x"],
        "answer": "y = 12x - 4"
      },
      {
        "question": "44. The equation of the tangent to the curve y = x^3 at x = 1 is _____",
        "options": ["y = x + 2", "y = 3x^2", "y = 4x + 1", "y = 5x + 1"],
        "answer": "y = 3x^2"
      },
      {
        "question": "45. The equation of the tangent to the curve y = x^2 - 4x + 4 at x = 2 is _____",
        "options": ["y = 2x - 4", "y = x - 2", "y = 4x + 4", "y = 3x - 5"],
        "answer": "y = 2x - 4"
      },
      {
        "question": "46. The equation of the tangent to the curve y = x^3 at x = 0 is _____",
        "options": ["y = 0", "y = x^2", "y = x", "y = 2x"],
        "answer": "y = 0"
      },
      {
        "question": "47. The equation of the tangent to the curve y = x^2 at x = 1 is _____",
        "options": ["y = x", "y = x^2 + 1", "y = 2x", "y = x - 1"],
        "answer": "y = 2x - 1"
      },
      {
        "question": "48. The equation of the tangent to the curve y = cos(x) at x = π is _____",
        "options": ["y = -1", "y = x", "y = -x", "y = x + 1"],
        "answer": "y = -1"
      },
      {
        "question": "49. The equation of the tangent to the curve y = e^x at x = 0 is _____",
        "options": ["y = e^x", "y = e^x + 1", "y = 1", "y = x + 1"],
        "answer": "y = 1"
      },
      {
        "question": "50. The position vectors of the vertices A, B, C of a tetrahedron ABCD are i + j + k, i and i + 3 respectively, and the altitude for the vertex D to the opposite face ABC meets the face at E. If the length of the edge ED is 4 and the volume of the tetrahedron is 3/2, then the length of DE is?",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
      },
      {
        "question": "51. All chickens are birds. Some chickens are hens. Female birds lay eggs. If the above three statements are facts, which of the following statements must also be a fact?",
        "options": ["I. All birds lay eggs.", "II. Hens are birds.", "III. Some chickens are not hens.", "II only", "II and III only", "I, II and III", "None of the statements is a known fact."],
        "answer": "II only"
      },
      {
        "question": "52. The number that comes next in the series 1, 2, 3, 6, 11, 20, 37, 68, .... is?",
        "options": ["105", "124", "125", "126"],
        "answer": "126"
      },
      {
        "question": "53. Using only 2, 5, 10, 25 and 50 paise coins, the smallest number of coins required to pay exactly 79 paise, 66 paise, and Re. 1.01 to three different persons is?",
        "options": ["17", "20", "19", "18"],
        "answer": "18"
      },
      {
        "question": "54. What pair comes next in the following sequence: 99, 90, 83, 78, ....",
        "options": ["71, 69", "69, 57", "67, 59", "69, 63"],
        "answer": "69, 63"
      },
      {
        "question": "55. A dealer offers a cash discount of 20% and still makes a profit of 20% when he further allows 16 articles to a dozen to a particularly sticky bargainer. How much above the actual price was the listed price of the article?",
        "options": ["100%", "80%", "75%", "66%"],
        "answer": "75%"
      },
      {
        "question": "56. A clock is set right at 5 AM. The clock loses 16 minutes in 24 hours. What will be the night time when the clock indicates 10 PM on the 4th day?",
        "options": ["11.15 PM", "11.00 PM", "12.00 PM", "12.30 PM"],
        "answer": "11.00 PM"
      },
      {
        "question": "57. A train overtakes two persons who are walking in the same direction in which the train is moving at the rate of 2 km/h and 4 km/h and passes them completely in 9 and 10 seconds respectively. Then length of the train is?",
        "options": ["72 m", "54 m", "50 m", "45 m"],
        "answer": "72 m"
      },
      {
        "question": "58. Decide which of the given conclusion logically follows from the given statement(s): All suns are moons. Some moons are planets. Conclusions: I. All moons are suns. II. At least some moons are planets.",
        "options": ["Either conclusion I or II is true", "Neither conclusion I nor II is true", "Both conclusions I and II are true", "Only conclusion II is true"],
        "answer": "Only conclusion II is true"
      },
      {
        "question": "59. Ten points are marked on a straight line and eleven points are marked on another straight line. How many triangles can be constructed with vertices from among the above points?",
        "options": ["495", "550", "1045", "2475"],
        "answer": "1045"
      },
      {
        "question": "60. The greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively is?",
        "options": ["123", "127", "235", "305"],
        "answer": "127"
      },
      {
        "question": "61. Which number replaces the question mark in the figure given below 8 7, 10 10, 12 12, 9 21, 4 1, 8 4?",
        "options": ["11", "6", "3", "21"],
        "answer": "11"
      },
      {
        "question": "62. Statement - I: Out of total of 200 readers, 100 read Indian Express, 120 read Times of India and 50 read Hindu. Statement - II: Out of a total of 200 readers, 100 read Indian Express, 120 reads Times of India and 50 read neither. How many people (from the group surveyed) read both Indian Express and Times of India?",
        "options": ["The question can be answered with the help of Statement II, alone.", "Both, statement I and statement II are needed to answer the question.", "The questions can be answered with the help of statement I alone.", "The question cannot be answered even with the help of both the statements."],
        "answer": "Both, statement I and statement II are needed to answer the question."
      },
      {
        "question": "63. If 137 + 276 = 435, how much is 731 + 672?",
        "options": ["534", "1403", "1623", "1531"],
        "answer": "1531"
      },
          {
      "question": "64. Study the information carefully and answer the questions given below: If we arrange the alphabets in the word “RATE” in the English alphabetical order, word “AERT” is formed. Then the third alphabet from the left in this word is “R”. Similarly, from the word “OPEN” we get “ENOP” and the third alphabet from left is - “O”. From the word “CHEF” we get -“CEFH” and the third alphabet from left is “F” From the word “TYER” we get - “ERTY” and the third alphabet from left is “T”. From the word “TOY” we get - “OTY” and the third alphabet from left is “Y”. If we use all these letters, then a meaningful English word “FORTY” can be formed. Now find which of the following word set DOES NOT give a meaningful word in the similar way.",
      "options": ["SAME, ROOM, BEST, AUTO", "GOAT, PEST, WATT, ARMY", "MALE, FIND, LOST THAT", "JUMP, LIME, DUMB, SOME"],
      "answer": "MALE, FIND, LOST THAT"
    },
    {
      "question": "65. Navjivan Express from Ahmedabad to Chennai leaves Ahmedabad at 6.30 AM and travels at 50 kmph towards Baroda situated 100 km away. At 7.00 AM Howrah-Ahmedabad Express leaves Baroda towards Ahmedabad and travels at 40 kmph. At 7.30 AM Mr. Shah, the traffic controller at Baroda, realizes that both the trains are running on the same track. How much time does he have to avert a head-on collision between the two trains?",
      "options": ["15 min", "20 min", "25 min", "30 min"],
      "answer": "25 min"
    },
    {
      "question": "66. If the points ( , ) 2 P a a lie in the region corresponding to the acute angle between the lines and then",
      "options": ["a ∈(2,6)", "a ∈(4,6)", "a ∈(2,4)", "a ∈(10,14)"],
      "answer": "a ∈(2,6)"
    },
    {
      "question": "67. Some friends planned to contribute equally to jointly buy a CD player. However, two of them decided to withdraw at the last minute. As a result, each of the others had to shell out one rupee more than what they had planned for. If the price (in Rs.) of the CD player is an integer between 1000 and 1100, find the number of friends who actually contributed?",
      "options": ["44", "23", "21", "46"],
      "answer": "44"
    },
    {
      "question": "68. Two liquids A and B are in the ratio 5 : 1 in container 1 and 1 : 3 in container 2 respectively. In what ratio should the contents of the two containers be mixed so as to obtain a mixture of A and B in the ratio 1 : 1?",
      "options": ["2 : 3", "4 : 3", "3 : 2", "3 : 4"],
      "answer": "3 : 2"
    },
    {
      "question": "69. If the cost of 7 pens and 6 pencils is Rs. 46 and the cost of 3 pens and 4 pencils is Rs. 23, what is the cost of 5 pens and 5 pencils?",
      "options": ["35", "38", "40", "42"],
      "answer": "40"
    },
    {
      "question": "70. A student scored 75% in Mathematics, 85% in Science and 90% in English. What is the average percentage of marks obtained by the student in all the subjects?",
      "options": ["80%", "82%", "83%", "85%"],
      "answer": "83%"
    },
    {
      "question": "71. A rectangular field is 50 meters long and 30 meters wide. What is the perimeter of the field?",
      "options": ["160 meters", "180 meters", "140 meters", "130 meters"],
      "answer": "160 meters"
    },
    {
        "question": "72. There are eight poets, namely, P, Q, R, S, T, U, V and W in respect of whom questions are being asked in the examination. The first four are ancient poets and the last four are modern poets. The question on ancient and modern poets is being asked in alternate years. Those who like W also like V, those who like S like R also. The examiner who sets question is not likely to ask question on S because he has written an article on him. But he likes S. Last year a question was asked on U. Considering these facts, on whom the question is most likely to be asked this year?",
        "options": ["Q", "R", "S", "V"],
        "answer": "Q"
      },
      {
        "question": "73. A team must be selected from the ten probable players – A, B, C, D, E, G, H, I and J. of these A, C, E and J are forwards, B, G and H are point guards and D, F and I are defenders. The team must have at least one forward, one point guard and one defender. If the team includes J it must also include F the team must include E or B, but not both if the team includes G, it must also include F. The team must include exactly one among C, G and I. C and F cannot be members of the same team. D and H cannot be members of the same team. The team must include both A and D or neither of them. There is not restriction on the number of members in the team. What could be the maximum size of the team that includes G?",
        "options": ["4", "5", "6", "More than 6"],
        "answer": "6"
      },
      {
        "question": "74. How many 4-digit numbers can be formed from the digits 2, 3, 5, 6, 7 and 9, which are divisible by 5 and none of the digits is repeated?",
        "options": ["216", "60", "24", "25"],
        "answer": "60"
      },
      {
        "question": "75. In a family of six person, there are people from three generations. Each person has separate profession and also they like different colours. There are two couples in the family. Mohan is a CA and his wife is neither a Doctor nor likes Green colour. Mohini is motherin-law of Savita and she likes the Orange colour. Engineer likes Red colour and his wife is a Teacher. Deepak is grandfather of Titu. Titu, who- is a principal, like the Black colour Neeru is the granddaughter of Mohini and she likes blue colour. Nerru's mother likes the White colour. Savita is a?",
        "options": ["Doctor", "Teacher", "Housewife", "None of these"],
        "answer": "None of these"
      },
      {
        "question": "76. If F is sitting between D and E, who is sitting to the left of K?",
        "options": ["H", "I", "H or I", "None"],
        "answer": "H"
      },
      {
        "question": "77. If H is sitting between I, and F. then he will be facing",
        "options": ["D", "E", "G", "I"],
        "answer": "I"
      },
      {
        "question": "78. If G and E are facing C and H respectively, the neighbours of K are",
        "options": ["J and H", "J and E", "H and J", "H and E"],
        "answer": "H and J"
      },
      {
        "question": "79. The integers 34041, and 32506 when divided by a 3-digit integer n leave the same remainder. What is the value of n?",
        "options": ["289", "307", "367", "493"],
        "answer": "307"
      },
      {
        "question": "80. The number of solid spheres, each of diameter 3cm that could be moulded to form a solid cylinder of height 54cm and diameter 4cm is",
        "options": ["16", "24", "36", "48"],
        "answer": "48"
      },
      {
        "question": "81. How many positive integers less than 10,000 are such that the product of their digits is 210?",
        "options": ["36", "42", "48", "54"],
        "answer": "48"
      },
      {
        "question": "82. Each of the five people, K, L, M, P, and Q is of a different weight. It is known that the number of people heavier than P is the same as the number of people lighter than Q. L is the heaviest and K is not the lightest. Who is the lightest?",
        "options": ["M", "L", "Q", "P"],
        "answer": "M"
      },
      {
        "question": "83. John, Johny, and Janardan participated in a race and each won a different medal among Gold, Silver, and Bronze, not necessarily in that order. Each person among them gives two replies to any question, one of which is true and the other is false (in any order). When asked about the details of medals obtained by them, the following were their replies: John: I won the Gold medal. Johny won the Bronze medal. Johny: John won the Silver medal. I won the Gold medal. Janardan: Johny won the Silver medal. I won the Gold medal. Which among the following is the correct order of the person who won the Gold medal, the Silver medal, and the Bronze medal, respectively?",
        "options": ["John, Johny, Janardan", "Janardan, John, Johny", "Johny, Janardan, John", "Janardan, Johny, John"],
        "answer": "Janardan, John, Johny"
      },
      {
        "question": "84. Each of A, B, and C is a different digit among 1 to 9. How many different values of the sum of A, B, and C are possible, if ABA × AA = ACCA?",
        "options": ["1", "3", "7", "8"],
        "answer": "3"
      },
      {
        "question": "85. In a certain code language, if the word ‘BASKET’ is coded as ‘UFLTBC’, then how is the word ‘SIMPLE’ coded in that language?",
        "options": ["FMQNJT", "FMQGNJ", "FMQNJH", "MFNQTJ"],
        "answer": "FMQNJT"
      },
      {
        "question": "86. What is E's profession?",
        "options": ["Accountant", "Lawyer", "Professor", "Engineer"],
        "answer": "Engineer"
      },
      {
        "question": "87. How many members of the group are males?",
        "options": ["2", "3", "4", "Cannot be determined"],
        "answer": "3"
      },
      {
        "question": "88. Wrong number in the series 7, 8, 18, 57, 228, 1165, 6996",
        "options": ["228", "18", "57", "8"],
        "answer": "228"
      },
      {
        "question": "89. How much time will the leak take to empty the full cistern? I. The cistern is normally filled in 9 hours. II. It takes one hour more than the usual time to fill the cistern because of a leak in the bottom.",
        "options": ["V", "U", "X", "Y"],
        "answer": "Y"
      },
      {
        "question": "90. How long will it take to empty the tank if both the inlet pipe P1 and the outlet pipe P2 are opened simultaneously? I. P1 can fill the tank in 16 minutes. II. P2 can empty the full tank in 8 minutes.",
        "options": ["X", "U", "Y", "V"],
        "answer": "X"
      },
      {
        "question": "91. If 5x - 4y = 6 and 3x + 2y = 12, then the value of x + y is...",
        "options": ["3", "4", "5", "6"],
        "answer": "3"
      },
      {
        "question": "92. If a sum of money becomes four times as large in 5 years at simple interest, then the rate of interest is...",
        "options": ["10%", "12%", "15%", "20%"],
        "answer": "20%"
      },
      {
        "question": "93. The average of five consecutive odd numbers is 21. What is the largest of these numbers?",
        "options": ["23", "25", "27", "29"],
        "answer": "25"
      },
      {
        "question": "94. A man buys two articles for Rs. 100 each. He sells one at a profit of 20% and the other at a loss of 20%. The overall percentage profit or loss is...",
        "options": ["0%", "2%", "4%", "6%"],
        "answer": "0%"
      },
      {
        "question": "95. In how many ways can 5 men and 3 women be seated in a row so that the women sit together?",
        "options": ["720", "600", "480", "360"],
        "answer": "720"
      },
      {
        "question": "96. The ratio of the number of boys to girls in a class is 5:3. If the number of girls is increased by 20%, how many boys should be added to the class to maintain the ratio?",
        "options": ["5", "6", "8", "10"],
        "answer": "6"
      },
      {
        "question": "97. The length of a rectangle is 4 meters more than twice its breadth. If the perimeter of the rectangle is 48 meters, what is the area of the rectangle?",
        "options": ["120 sq.m", "150 sq.m", "160 sq.m", "180 sq.m"],
        "answer": "120 sq.m"
      },
      {
        "question": "98. A sum of money triples itself in 4 years at compound interest. In how many years will it become 27 times?",
        "options": ["12", "16", "18", "20"],
        "answer": "12"
      },
      {
        "question": "99. A boat takes 8 hours to travel upstream and 6 hours to travel the same distance downstream. If the speed of the boat in still water is 10 km/h, the speed of the stream is...",
        "options": ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
        "answer": "4 km/h"
      },
      {
        "question": "100. If the ratio of the area of two squares is 16:25, what is the ratio of their sides?",
        "options": ["4:5", "5:6", "4:6", "5:8"],
        "answer": "4:5"
      },
      {
        "question": "101. The sum of the first 50 natural numbers is...",
        "options": ["1225", "1275", "1300", "1500"],
        "answer": "1275"
      },
      {
        "question": "102. A man is standing on the platform of a moving train. He can walk with a speed of 5 km/h and the train moves with a speed of 40 km/h. The time taken to cover 100 meters is...",
        "options": ["5 seconds", "10 seconds", "20 seconds", "25 seconds"],
        "answer": "10 seconds"
      },
      {
        "question": "103. The probability of getting a red ball from a bag containing 4 red, 3 blue, and 5 green balls is...",
        "options": ["4/12", "5/12", "3/12", "1/2"],
        "answer": "4/12"
      },
      {
        "question": "104. A person invests Rs. 1000 at 10% simple interest for 5 years. What will be the total amount after 5 years?",
        "options": ["Rs. 1500", "Rs. 1600", "Rs. 1700", "Rs. 1800"],
        "answer": "Rs. 1500"
      },
      {
        "question": "105. The number of zeros in 100! is...",
        "options": ["20", "24", "25", "30"],
        "answer": "24"
      },
      {
        "question": "106. A sum of money is invested for 2 years at compound interest. If the interest is Rs. 800 and the principal is Rs. 4000, what is the rate of interest?",
        "options": ["8%", "10%", "12%", "15%"],
        "answer": "10%"
      },
      {
        "question": "107. If the price of a commodity increases by 10% and the consumption decreases by 10%, the effect on the expenditure will be...",
        "options": ["No change", "Increase by 10%", "Increase by 5%", "Decrease by 5%"],
        "answer": "No change"
      },
      {
        "question": "108. A man can complete a work in 20 days. If he works for 8 days and then leaves the work, how many more days will it take for his partner to complete the work?",
        "options": ["12 days", "15 days", "16 days", "18 days"],
        "answer": "12 days"
      },
      {
        "question": "109. In a partnership, A invests Rs. 5000 and B invests Rs. 8000. If the total profit after 1 year is Rs. 1800, then B's share in the profit is...",
        "options": ["Rs. 800", "Rs. 900", "Rs. 1000", "Rs. 1200"],
        "answer": "Rs. 900"
      },
      {
        "question": "110. A train travels from station A to station B at a speed of 60 km/h and returns from B to A at a speed of 40 km/h. The average speed for the entire journey is...",
        "options": ["50 km/h", "55 km/h", "52 km/h", "48 km/h"],
        "answer": "50 km/h"
      },
      {
        "question": "111. A shopkeeper sells an article at a price of Rs. 100 after allowing a discount of 20%. What is the cost price of the article?",
        "options": ["Rs. 110", "Rs. 120", "Rs. 125", "Rs. 150"],
        "answer": "Rs. 125"
      },
      {
        "question": "112. If a triangle has sides of lengths 3 cm, 4 cm, and 5 cm, it is...",
        "options": ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        "answer": "Right-angled"
      },
      {
        "question": "113. The total number of diagonals in a polygon with 10 sides is...",
        "options": ["35", "40", "45", "50"],
        "answer": "35"
      },
      {
        "question": "114. The sum of the squares of two numbers is 25 and their product is 12. The sum of the numbers is...",
        "options": ["5", "6", "7", "8"],
        "answer": "7"
      },
      {
        "question": "115. If a sum of money is invested at compound interest at 10% per annum, then the amount becomes Rs. 1331 after 2 years. The principal is...",
        "options": ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1500"],
        "answer": "Rs. 1100"
      },
      {
        "question": "116. The LCM of 12 and 15 is...",
        "options": ["60", "90", "120", "180"],
        "answer": "60"
      },
      {
        "question": "117. The ratio of the areas of two squares is 49:64. What is the ratio of their perimeters?",
        "options": ["7:8", "8:9", "7:9", "8:7"],
        "answer": "7:8"
      },
      {
        "question": "118. A pipe can fill a tank in 10 hours and another pipe can empty the tank in 20 hours. If both pipes are opened together, the tank will be filled in...",
        "options": ["20 hours", "15 hours", "25 hours", "30 hours"],
        "answer": "20 hours"
      },
      {
        "question": "119. A circle is inscribed in a square of side 10 cm. The area of the circle is...",
        "options": ["78.5 cm²", "80 cm²", "90 cm²", "100 cm²"],
        "answer": "78.5 cm²"
      },
      {
        "question": "120. A man can row a boat at 8 km/h in still water. If the stream is flowing at 2 km/h, then the speed of the boat downstream is...",
        "options": ["6 km/h", "8 km/h", "10 km/h", "12 km/h"],
        "answer": "10 km/h"
      }

];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("div");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => {
            selectedOption = option;
            document.querySelectorAll(".option").forEach(el => el.style.background = "#ddd");
            btn.style.background = "#007bff";
            btn.style.color = "white";
            nextBtn.disabled = false;
        };
        optionsEl.appendChild(btn);
    });

    nextBtn.disabled = true;
}
document.addEventListener("DOMContentLoaded", loadQuestion);
document.getElementById("nextBtn").addEventListener("click", () => {
  if (selectedOption === questions[currentQuestionIndex].answer) {
      score++;
  }

  selectedOption = null; 
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      endQuiz();
  }
});
document.getElementById("nextBtn1").addEventListener("click", () => {
  endQuiz();
});
function endQuiz(){
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").textContent = `Test Completed! Your Score: ${score} / ${questions.length}`;
  document.getElementById("quiz").style.fontSize= "44px";
}
