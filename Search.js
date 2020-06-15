const c = ["Chittoor","Jalgaon","Tirupur","Shimoga","Uttarakhand","Sangli","Nellore","Thrissur","Mangalore","Mandya","Hissar","Imphal","Manipal","Vijaywada","Gurgaon","Wayanad","Kurnool",
"Trivandrum","Durgapur","Nadiad","Belgaum","Goa","Miraj","Kanpur","Amravati","Rajkot","Bikaner","Faridabad","Mysore","Jamnagar","Udupi","SRINAGAR ","Erode ","Jamshedpur","Indore",
"Udaipur","Tiruvalla","Mumbai","Bhavnagar","Pondicherry","Mohali","Kakinada","Kannur","Midnapore","Berhampur","Alaphuzha","Thiruelveli","Trichy","Nagpur","Patiala","Patan","Shimla",
"Asansol","Nanded","Hubli","Shri Ganganagar","Vadodara","Agartala","Jodhpur","Salem","Meerut","Tanjur","Jaipur","Surat ","Kottayam","Dibrugarh","Silinguri","Dhanbad","Karimnagar",
"Warangal","Bokaro","Tuticorin ","Bhopal ","Delhi","Nagarcoil","Ludhiana","Gwalior ","Pathanamthitta","Jabalpur","Rohtak","Bhubaneshwar","Agra","Bareilly","Kolhapur","Haldwani","Palakkad",
"Cuttack","Ranchi","Ongole","Chennai","Varanasi","Nashik","Pune ","Bhatinda","Solapur","Kota","Anand","Banglore","Patna","Ramanathapuram","Bellary","Noida","Bhimavaram","Hyderabad",
"Malappuram","Jammu","Gulbarga","Akola","Aurangabad","Cuddapah","Amritsar","Panchkula","Kollam","Tirupati","Kozhikode","Guwahati","Guntur","Govindpur","Raipur","Lucknow",
"Rajahmundry","Ghaziabad","Kolkata","Cochin","Allahabad","Ahmedabad","Chandigarh","Coimbatore","Gorakhpur","Vishakapatnam","Davangere","Jalandhar","Phagwara","Madurai",]

const names = ["A.K,Hooda ","Akankhya Agarwal","Akhil Mishra","Alka Bhasin","Amber Khaira","Amit Baweja","Anant Kumar","Anil Yadav","Anish Singhal","Anurag Gupta","Arvind Bagga","Ashish Kalra ",
"Ashok Sarin","Ashwani Gupta","Ashwani Goel","B S Solanki","D K Agarwal","D S Rane","D Vijaya Rajkumari","Deepak Jain","Deepak Kalra","Dilip Bhalla","Dinesh Khullar","Dinesh Mittal",
"Dipankar Bhowmik","Ganesh","Gaurav Sagar","H S Mhapatra","H S Uberoi","Harsha Jauhari","Himanshu Verma","Jyant Kumar Hota","K K Malhotra","Kailash Nath Singh","Madan Sethi",
"Manish Malik","O P Kalra","P.D.Gulati","Pankaj Hari","Parul Mishra ","Prabul Rajvanshi","Pradeep chatree","R K Duggale","R khanduja ","R P Mathur ","Rahul Grover","Rajesh Aggarwal",
"Rajiv Kohli","Ramesh Hotchandani","Ramesh Jain","Ramesh Kumar","Ravi Bansal","S C Chhabra","S C Tiwari","S K Agarwal","S K Jain","S M Hussain","Samir Tawakley","Sandeep Gupta",
"Sandeep Mahajan","Sanjeev Behura","Sanjeev Jasuja","Sanjiv Mahajan","Sanjiv Saxena","Shalin Agarwal","Sham Sunder","Shivrama Krishnan","Shri Ram Kabra","Sucheta Yadav",
"Sudeep Singh","Suman Lata","Sunil Prakash","T Murari","Tanmay Pandey","Uma Kishor ","Umesh Gupta","Umesh Nautiyal","Upendra Singh","V K Jha","Varun Verma","Vikram Kalra",
"Vinant Bhargava","Vindu Amitabh","Y C Kaushik","Yasir Sultan Rizvi","B K Upadhaya","Gaurav Sahai","Jitender Kumar","Suresh Chandra","Ashish Nandwani","Ajay Kumar","Anupam Roy",
"Dinesh Bansal","Dinesh Kumar Yadav","L K Tripathi","M K Phanish","Manish Jain","Manju Agarwal","Mohit Khirbat","P N Gupta","Pranav Kumar Jha","Preeti Bansal","Rajesh Ahlawat",
"Reetesh Sharma","Salil Jain","Saurabh Pokhariyal","Shashidhar Shriniwa","Shyam B Bansal","Sidharth Kumar Sethi","Vijay Kher","Vishal Saxena","Arvind Gupta","Krishnan Singhal",
"Amit Mann","Amit Yadav","H K Agarwal","Nityanand","R K Yadav","Charanjeet","Sanjay Vikrant","Puneeta Gupta ","S.K.Bali","Vijay Gupta ","Ghulam Hassan Malik","Imtiyaz Ahmed Wani",
"M.Saleem Najar ","Muzafar Maqsood Wani","Harsaran Kaur","M C Maheshwari","P S Mokha","S J S Khurana","Virender Singh","Jagatjit Singh","M S Sindhu","Swarnjeet Kaur","Ajay Agarwal",
"Ashok Agarwal","Ajay Goyel","G S Sandhu","H S Kohli","Ishwadip Singh","Jagdish","K S Chugh","K L Gupta","Munish Chauhan","Manish Rathi","Mukut Minz","R Raja","Sarbpreet Singh",
"Sanjay`s cruz","S C Chabbra","Vinay Sakhuja","Vivek Kumar","Vivkanand Jha","Ajay Marawaha","Ashutosh Soni","B S Walia","Manoj Chaudhary","Raghuvendra Singh","Rajeev Bhatia",
"Rajesh Agarwal","Ravi Angral","Sanjay Mittal","B S Aulakh","Bakshish Singh","J S Sandhu","N S Khaira","Neena Gupta","P M Sohal","Rahul Kohli","Rajan Isaacs","Sanjeev Gupta",
"Vikas Makkad","Amit Sharma","Arjinder Singh Bains","Avinash Srivastav","H S Gil","Navjit S Sidhu","Raka Kaushal","P K Prasher","Udham Singh","Baldev Raj","Ajay Pal Singh",
"Jitendra Falodia","A K Sharma","A K Singh","Alok Jain","Amit Vijay Lion D`souza","Dhananjay Agarwal","Dharmendra Prasad","J B Gupta","Jitendra Goswami","Kamal Kaswan",
"Karamveer Singh Godara","Kunal Gandhi","L C Sharma","Mohit Mathur","Navneet Saxena","Neha Bansal","Nishad Ravindra","Pankaj Beniwal","Piyush Kimmatka","Prateek Tripathi",
"Rajendra SinghTanwar","Rajesh Jhorawat","Rajesh Kumar Garsa","Rakesh Kumar Gupta","Ranveer Singh Chaoudhary","S K Pareek","Sheel Bhadra Jain","Surak Godara",
"Uma Shankar Gaur","Vinay Malhotra","Arvind Kalla","Manish Chaturvedy","Mayank Jain","Pankaj Kasat","Vikas Khandaliya","Mohit Nagpal","Sandeep Chauhan",
"Arvind Kala","Bakul Gupta","G K Mukhiya","Mukesh Barjhatiya","Sonia Gupta","Apoorva Jain","Bharat Maheshwari","Kishore Basantani","U C Arora","Arvind Gupta","Anurag Singh",
"Saurabh Gujrati","Arun Kumar Sah","Sharad Agarwal","Somesh Mehrotra","Vijay Gupta","Amit Gupta","Keshav Das Sadhwani","L K Jha","Lalit Pursnani","Narinder Pal Singh",
"Neeru P Agarwal","O Husnain","Anand Banka","Archana Bhadauria","Desh Raj Gurjar","Dilip Sinha","Nirbhai Kumar","Samir Govil","A K Singh","Abhilash Chandra","Ajay Singh","Amit Gupta",
"Amit Kumar","Anupama Kaul","B Karthikeyan","Bhawana Amol Ramesh Rao","D S Bhadauri","Debashish Saha","Deepak Dewan","Mahbleshwar Maya","Manas Ranjan Patel","Manjunath R",
"Manns ManoharJ","Monika Yachha","Mufazzal Ahmad","Mukhareesh","Mv Suresh Kumar Reddy","Narayan Prasad","Praveen Kumar Etta ","R.K.Sharma ","R P Elhence","Rahul Shukla",
"Rishi Kishore","Sant Pandey","Shashi Kumar","Shivendra Singh","Vinay Badri","Arvind Trivedi","K C Joshie","Kamal K Pahwa","Pradeep Kumar","Prashant Bendre","Sandeep Garg",
"Tanuraj Sirohi","M D Sharma","Manoj Singhal","Rajesh Bansal","Sanjay Wadhwan","U C Arora","D K Sinha","Deba Prasad Kar","J P Ojha","Nitin Agarwal","P K Dole","P K Rai","Pragya Pant",
"R G Singh","Shiv Shankar","Surendra S Rathore","Vijay ","Vivk C Gainger","Alok Kumar","Anita Sharma","Ashutosh Mathur","Gulshan Mukhiya","Harish Basera","P C Wohra","Sandeep Kumar Mandal","V B Nautiyal","Vikram Singh",
"S R Saxena","Gagan Jhawar","Prawash Kr Chowdhary","Sainath Pttewar","Sanjeev A Kale","Shubha Dubey","Sunil Dharmani","Sunit Choudhary","Apurva Parekh","Asit Mehta ",
"Bhavin Mehtalia ","Devang Patiwari ","Dinesh N Gera ","Divyesh Engineer","H L Trivedi","Haresh Patel","Himanshu A. Patel","Himanshu V. Patel","Jagdeep Shah ","Javed Vakli ",
"Jay H Shah","Jigar D Shirmali","Kamal Goplani ","Kavitha Parihar","Kundan Wadhai","Manish Balvani ","Manoj M Gumber","Vishal Golay","Manthan Kansara","Maulin K Shah",
"Nilam Thakrer","Pankaj R Shah","Pavan S Wakhare","Prakash Darji","Pravin Ghule","Rajesh Singh Gautam","Rajkumar Mandot","Saiprasad Shinde","Saurin Dalal","Siddhartha Mavani",
"Sonal Dalal","subramanian S Iyer ","Varyani Umesh Tulsidas","Vipul Gattani","Vivek Kute ","Akila M.Vora ","Anil K Patel","Deepak Tamakuwala ","dhanesh Vaidya ","Fagun Shah",
"Haresh V Savani","Ketan Desai ","Siddharth H Jain","Vatsa P Patel ","Anurag Jain","Hardik Patel ","Kalpesh Gohel ","Mohan M Rajapurkar ","Mukesh Goyal","Pranamita kalita ","Sishir Gang ","Snehal Mahadev  Ghanwat","Umapati Hegde","Vipul Chakurkar","Divyesh Viroja","Ghanshyam Jagani","Mahipal Khandelwal","Praful Gajjar","Sanjay N Pandya","B.D Sinha","Tushar Gandhi","Maulik Shah","Deepak Saboo","Miten P Mehta","Jayesh Modi","Anil Ganju","Archit Patel","Kamlesh Praikh","Manish Dabhi","Yogesh Bhargava","A V Ingale","Ajay Naxena","Alan F Almeida","Amit Katyal","Amit Nagarik","Amjad Khan Pathan","Anup P Chaudhari","Arun P Doshi","Arun R Halankar","Arun Shah","Aseem Thamba","Ashay P. Shingare ","Ashok l kriplani","Atim Pajai","Avinash E.Chaudhari","Balkrishna More ","Bharat V. Shah","Bhavesh J Vora","Bhupendra v. Gandhi ","Chandan Choudhari","Deepa Jayaram","Deepak Jadav","Dhakate Tushar Arun","Dilip Kriplani ","Dinesh Mahajan","Gurav Daga","Geeta Sagar Seth","Hardik Shah","Haresh Dodeja","Harshal Bhole","Hemal A Shah","Hemant J Mehta","Jatin Kothari","Jay M Patel","Jayesh D Desai","Jayesh D Desai","Jyostna Zope","Kalpana S Mehta","Kamini Mehta","Keyur Dave ","Kirti L Upadhaya","Krishna Somani","Kulkarni Amar Vilas","L H Suratlal","M M Bahadur","Mahendra Mulani","Mahendra R Merchant","Mahesh Prasad","Majid A Momin","Martin F D`souza","Mihir Kulkarni","Mukesh M Shete","Mustafa Khokhwala","N K Hase","Narendra M Dedhia ","Nikil Kedia","Niranjan S Kulkarni","Nitin Bhosale","Nitin L Sonavane ","Pankaj Deshpande","Pooja Binani","Prashant Rajput","R k Malik ","Rajendra V Gunjotikar","Rajesh B kumar ","Rajshree Ramasethu ","Ramesh Rao",
"Rasika Sirsat ","Ravindra Nikaji","Rekha dubey ","Rohan U Pradhan","Ruchi Samadhani","Rupen Panchal","Rushi Deshpande","S P Trivedi","Sachin Gupta ","Sameer Vilas Vyahalkar","Sandip Bhurke ","Savita Gangurde","Sham Namdeo Pagar","Sharad M Sheth","Shrirang Bichu ","Shruti Tapiawala","Siddharth Lakhani","Sudhir Ranjan Das Choudhary","Sunil Jawale","Suyash Sharam","Swati Mane ","Tarun Mittal","Tukaram Jamale","Uma S. Ali","Umesh B Khanna ","Vaibhav Keskar","Varun Bansal ","Vidya kadam","Vishal V. Ramteke ","Vishwanath Billa ","Abhay G Huprikar`","Abhay N Sarde ","Anil Godbole","Atul Mulay","Atul Sajgure","Avinash Ignatius","F F Vadiya","Ganesh Mhetras","Jagtap Sudhir P","Jyoti Sharma","Mahesh Rokade ","Manish Mali","Manoj Mathnani ","N C Ambekar","Rajaram  R Jagdale","S M Ambike","S V Ukidve","Satish Mendonca","Siddhesh Dhaygude","Tarun Jeloka","Tushar Dighe","Valentine Lobo","Prashant P Pargaonkar","Ravindra V Bhattu","Sachin Soni","Shekar P Shiradhonkar","Sudhir G Kulkarni","Suhas Bavikar","Ulhas Kundpalle","Deodatta Chafekar","Devikumar Kelkar","Jayesh Wadhulde","Kailas  S Shewale","Mohan Patel","Nagesh Aghor","Prakash Ugale","Vijay Ghatge","Amol Mahaldar","J P Tiwari","Shital S Lengade","Abhijit K Korane","Ajit Joshi","Praksash Sharbidre","Vilas S Naik","Ashwini Kumar Khandekar","C P Bawankule","Dhananjay Ookalkar","Monali R Sahu","Nilima Ambade","Prakash Khetan","Rajashri Yadav","S J Acharya","Sameer Chaubey","Shrinivasu Achanta","Suryashree Pandey","Swati Vakil","V L Gupta","Vandana Baraskar","Amit S Gavde","Bipin C Munjappa","Amol S Bhagat","Nikhil Kibe","Sadanand Bhusari","Aninash Chaudhari","Rahul Mahajan","Sunil Masare","Santosh Durugkar","Abhay Joshi","Shashikant Gajre","Rajeev Gandhi","Anand N Malu","Basavaraj S Kolur","Kiran Joshi","Sunil Andhalgaonkar","Sandeep Holkar","Achal Sepaha","Anita Chowksey","Bhavani Mohan Raju","Bhavin Bramhabhatt","Jai Kriplani","Naresh Pahwa","O.P.Rathi","Pradeep Salgia","Rajesh Bharani","Rubina Vohra","Sandip K Sexena","Shraddha Goswami","Akash Deep Suri","Dinesh Upadhyay","Gopal K Modi ","H F Kagalwala","Mahendra K Atlani","Sanjay Gupta ","Manish Gupta ","Anil Jain","Ashwini Pathak","Vishal Wadhera","Anjan Barkatoky","Anup Kumar Barman","Manjuri Sharma","Mitul Sharma","Nandita Choudhary","P J Mahanta","Tronmoy Das","Basanth Sharma","Sawjib Borphukan","Amresh Krishna","Gopal Prasad","Hemant Kumar","Indu  Bhushan Sinha","Jyoti Prakash","Mani Bhushan","Manoj Kumar","Mritunjay Kumar Singh","Navin Chandra Prasad","Om Kumar","Pankaj Hans","U S Rai","Vinod Kumar Singh","A K Baidya","Ghanshyam Singh","Hemant Rohatgi","P B Singh","S S Prasad","Sidhartha Mishra","A Waheed Khan","C S Mitra","K Kaushal","Pankaj Kumar Mishra","Prabhakar Yadav","S K Panda","Mukteshwar Rajak","S H Pathak","V K Pandey","Gulivar Postsangbam","L K Sarath Chandra Singh","N Sarath Kumar Singh","S K Panda","S B Raut","A C Mahakur","Ashok Kumar Panda","Bibekananda Panda","Neeraj Mishra","Nishit Kumar Mohany","S C Dash","S K Palit","Subodh Kumar Das","Sukanta Kishore Das","Bibekananda Kar","Chita Ranjan Kar","Prashanta Kumar Sahoo","R N Sahoo","Shashi Bhusan Rout","Tisar Kanti Dey","V.V. Gupta","A.R Dutta","A.R. Nandi","AbhijitTaraphder","Ametashver Singh","Amit Pasari","Arghya majumdar ",
"Arpita Roy Chowdhary","Atul  Desai","B Konar","Bijan Bhattacharya","C N Sarkar","C Palit","C S Panja","D K Pahari","D S Ray","Dayanath Mishra","Debabrata Sen","Dipankar Sircar",
"Gautam Majumdar","H Nagar","H R Das","Indira Jha","Jayanta Basu","Jayanto Dutta","K Sen Gupta","Kanailal Karmakar","Kausumbhi Choudhary","Kaushik Das","Krishna Patil","Lalit Kumar Agarwal","M C Seal","Mamata Sardar","Manish Jain","Mayuri Trivedi","Pinaki Mukherjee","Praitk Das","Pratim Sengupta","Praveen Malvade","Puneet Arora","Punnoose Thomas","R N Saigal","Rabindranath Ghosh","Rana Bhattacharya","Ranjan Sarkar","Rudraprasad Roy","S C Dey","S Ganguly","S K Bhomik","S Nandy","S S Saha","Saibal Rakshit","Sandip Bhattacharya","Sanjay Das Gupta","Saubhik Sural","Shankar Chaterjee","Sharmila Thukral","Soumay Gupta","Sourabh Mitra","Suchondra Das","Supriyo Dasgupta","Sushmita Banerjee","V V Lakshminarayan","B.D.Ghosh","Bhupen Burman","Manoranjan Sahoo","Chandan Dutta ","Pratim Roy ","Ratan Kumar Agarwal ","A Gopal Kishan","A Ravi Andrews","A S Murthy","A Sashi Kiran","Anuradha","Archana","Ashwin Kumar Aiyangar","Ashwin Kumar Panigrahi","B Sudhakar","Bharathi K","Ch Rajendra Prasad","D SreebhushanRaju","Dasaradha Uyyala","Dilip M Babu","E Ravi","G Dhanalakshmi","G Divakar Naidu","G Swarnalatha","G Sashidhar","Gandhe Sridhar","Girish","Girish Narayan","Hima Bandu","Hussain Shaistha","Imran","Jyostna G","K G Rajaram","K S Nayak","K V Dakshinamurthy","K Bharathi","Karthik","Kiran Mai Ismal","Kirankumar Makku","Kranthi Kumar","M Kamal Kiran","M Ravi Kumar","M Somasekhar","Manisha Sahay","Md Abdur Rafey","Mehul A Shah","Naga Jyothi","P Sharma Vali","P Vikranth Reddy","Parthasarathi S V","Pradeep Deshpande","R Aruna","Raghavendra Sadineni","Rahul","Raja K Kalidindi","Raja Bhoumik","R.Chakravati","Rajiv","Rama","Rama Shankar Jella","Rama Kumar Chada","Ranafathima Begum","Ratan Jha","Rani Kiran","Ravisankar Yalamarty","S Krishnan","S Sahariah","S Sriram","Sai Vani","Saikrishna","Sairam Keithi Reddy","Samuel","Sandeep Reddy","Sanjay Maitra","Santosh Kumar","Satti Reddy Vanga","Seema","Shailesh Gondane","Shareef","Shyamsunder Rao C","Sreekant Burri","Sri Venkata Subhramanyam","Sridhar Reddy","Srikant","Srinivasa Rao","Sriram S","Sudhakar G ","Surendrababu M","Suresh Babu V","Suresh Kumar Gauthami","Suryanarayan Mandal","Sushmita","T Gangadhar","Traun Kumar Saha","Urmila Anandh","Venkateshwarrao M","Vijesh Varma Tadikonda","Vikram Aditya","B Choudhary","D Vani","G Sarath Babu","M Harikrishna","M V Saikrishna","N Ammanna","P Anil Kumar","P Satya Vanseedhar","Paladugu Ramakrishna","Ramesh Yelanati","S  Ravishankar","A Kumar","A V Venugopal","Anil Kumar Patro","Anita","Anjani Achanta","Aslam","B B Phanilumar","B S Nehru","C S Nageshwar Rao","G Prasad","J Narasrinivasulu","K Kalyan Chakravarthy","M S Ravishankar","M RaviKumar","N Pavan Kumar Rao","Ratna Prabha","Sasidhar G","Sriram Naveen","T Raviraju","V Ramesh Chandra","Velagala Srinivas","Vidya Sagar","B Sriamulu","Praveen Kumar Reddy","Venkataramana Reddy Mangalapalli","R Ram","Hithaishi C","Manjusha Y","Sridhar","V Sai Naresh","V Siva Kumar","K Sravankumar","P Ramachandra","Satish Reddy","Avula Srinivas","Ch V Ramakrishna","G Sivaramakrishna","Sunil Kumar Kilari","V Srilatha","Parth Karmakar","Ramesh Vasa","Sharath Kumar Reddy","P N Jikki","A k Chakravrthy ","Madhav Desai","Prathima","praveen Kumar","S V L Narayna Rao","Sanjeev Nair","A Srihari ",
"Prasada Rao ","P Ravindra ","P Ravindr ","S Nemani","Y Rakesh ","Ajith Huilgol","Anil Kumar B T ","Anil Vasudevan","Anitha","Anoop M","Arpana Iyengar","Arun T","Arun K N","Arvind C",
"Ashish Parekh","Babitha Hemakumar","Balaji Prasad P G","Bobby Chacko","Chacko K Jacob","Chandrashekar A","Deepak Kumar C","Dilip Rangarajan","Gireesh M S ","Girish Namagondlu",
"Girish P Vakrani","Gnanadev","Gokulnath ","Gurudev K C","H Sudarshan Balla","Hareesha Babu","Ishtiaque Ahmed","Jyothi H Ramachandra","Kiran  K","Kiran Chandra Patro",
"Kishore Babu S","Kishore Phadke","Leelavathi","Limesh","Lloyd Vincent","M M Satish Kumar","M Manjanna","M R Ramesh","Mahesh C","Mahesh E","Maliikarjun H M ","Mangesh",
"Manjunath S","Manoharan B","Naveen M Nayak","Naveen Naik","Nithin Hegde","Nivedita","Padmanabhan S","Poonam Maurya","Prakash G K","Prashnath G Kedlaya","Premalatha R",
"Radha Krishna Reddy CG ","Rajanna Sreedhara","Raju V R ","Ramakrishnan S","Ramesh M R ","Ravi","Ravi Jangamani","Ravi P Deshpande","Raviendra N S","Ravindra T","Ravishankar B",
"Renuka S","Rohan Augustine","S M Shiva Prasad","Samyukhtha","Sandeep","Sanjay Rampure","Sanjay Rao S","Sanjay S","Sanjeev Kumar Hiremath","Sanju S","Satish D",
"Shailendra Goswami","Shakuntala V Modi","Shilpa Shetty","Siddaraj K S ","Sreedhar S Inamdar","Sreedhara C G ","Sridhar C N","Sudhakar","Sudhakar S","Sundar S","Sunil R",
"Sushma Rani R ","Topoti Mukerjee","Umesh L","Veerabhadra Guptha","Vidyashankar P","Vijay Varma","Vinod S","Viswanath S","Yeswanth S ","Archana Dombal","Mallikarjaun S Khanpet",
"Ritesh Vernekar R","Anwar M I","Nagmani Agarwal","Prakash D","Rajeev Agarwal","Sallaudin","Vikas S","Anand Shankar","Manjunath Doshetty","Vivek Patil","Venkatesh Vikram",
"Nandeesh Vikram","Ashok Bhat M","Jagadeesh T","Janardhan Kamat","Mayoor Prabhu","Prashanth Kumar K","Shashidhar Baikunje","Sudarshan Shetty K","Sushanth Kumar B",
"Manohar Bairy","Nageshwara Reddy","Ravindra Prabhu A","Arun K G ","Chetan","Himamani","Manjunath S Shetty","Srinivas Nalloor","Srinivasan P","Vijay Kumar L","Vijay R M",
"Anupama Y J","Dayanand A S","Shiv Kumar","Chandrashekar G S","Abdul Rasheed","Abi Abraham","Anil Mathew","Babu Francis","Bibin Johny","Binu Upendran","George Kurian",
"Georgy K Nainan","Jojo K Pullokkara","Jose Paul","Jose Thomas","Joseph K Joseph","Kishore S Dharan","Mammen M John","Mohammed Iqubal","Punnooose Thomas","Rajesh R",
"Rasheed","R V Ramkumar","Renjit [Prabhu","Sooraj Y S","Unni V N ","Satish S","Sandeep Sreedharan","Vinod Kumar K","Zacharia","Aneeb V P ","Binoy Thomas","K P Jayakumar","Liji R",
"Sebestian Abharam","Suresh G A","T Pathros Matthai","Unnikrishnan ","Usha Samuel","Benil Hafeeq K P","Biju K Gopinath","Dipin S","Feroz Azeez","Ismail N A","Jayameena P",
"Jyotish C Gopinathan","M Sreelatha","M Thomas Mathew","Pradeep V R","Raghunath K V","Rajaratnam Krishnan","Ranjit Narayanan","Sajith Nrayanan","Sandeep Shenoy",
"Sarfaraz Aslam","Smitha Vijayan","Sunil George","T P Noushad","Thushara A","Vinugopal S","Biju M V","Bijoy Anthony","Rajesh P K","Arun C","Krishnadas T","V M Ganesan",
"Lakshminarayana G R","Manju Kamal","Pradeep Krishnan","Roshin Joseph","Swaraj Sathyan","Aneeb Raj V P","Jayakumar E K","Jayant Kumar Mathew","John A G","P M Jayaraj",
"Raghunath M","T T Paul","V P Sathyanathan","Vinod P Baburaj","Vinu Thomas","Joseph Vinu P A","Praveen Nampoothiri","Sreedas","Sreepa","Manjula Ramachandran","Rajesh Joseph",
"Reena Thomas","Beena Unnikrishnan","Chacko Varghese","Geetha M Nair","Jacob George",
"Jigy Joseph","Lekha Krishikesan","Lissy Thaomas","Manjuthampi","Mohandas M K ","Noble Gracious","Praveen Muralidharan","R Kasi Viswewaran","Ramdas Pisharody","Safeer",
"Sanjeev Kumar","Sandeep Varma","Saroja Nair","Sathish B","Sreejesh","Susan Uthup","Vimala","Vineetha","Gomathy","Manu Krishnan","Satheesh Balakrishnan","A.Ezhilarasi","Abheesh P",
"Andrew","Anitha Jagananthan","Arun Vargheset","Ashok Kumar","B Balamurgan","B Subbraro","Bala Mugunth","Bala Singh","Balaji ","Balaji ","C Kedhar Narth","C M Thiagarajan",
"C M Vasudevan","C Padma Kumar","D Shivkumar","D Surendar","Deepu Sabu George","Dhanapriya","Diwakar","Ganesha","Geetha","Georgi Abharam","Harish M","Indumati E",
"Jayprakash","K C Prakash","K T Valavan","K V Baliga","Kanakaraj","Kannan Bhabha","Krishnan Kumar","M A Muthu Sethupathi","M A Shanmugasundram","M Jayakumar","M Kamarajan",
"M Nagarajan","M S Amaresan","M Edwin Fernando","M Ram Prabahar","M Vijayakmar","Mahesh Kumar K B","Manorajan R","Milly Mathew","Mookambiga","Muthu Jayaraman",
"N Gopalakrishnan","N K Ganeshprasad","N Sivakumar","N Malathy","Neha Singh","P Arun Prasath","P Muthu Kumar","P Sampath Kumar","P Shankar","P Soudararajan",
"P Visweswar Reddy","Padmanaban","Padmaraj","Prabha Senguttuvan","Prabhu Renjith","Prahalad","R Balasubramaniyam","R P Senthil Kumar","R Sakthirajan","R Venkatraman",
"R Vijayakumar","Radha Venkataraman","Ragavendra Naik","Raja Mahesh","Rajan Ravichandran","Rajiv Annengari","Ram Prasad","S Balamurgan","S Balsubramanian","S Bhaskaran",
"S Iiango","S Jayalakshmi","S Manikantan","S Murugan","S Murugananth","S Rajagopalan","S Ramalakshmi","S Sreedhar","S Suresh","S Thirumurugan","S A K Noor Mohammed",
"S E Dhanasegaram","S P Mahrajan","S Thirumavalavan","Sanjay Patil","Saritha Vinod Dasari","Sathish M Rao","Sathyan","Shivkumar D","Siva Nagendra Reddy","Srinivas Prasad",
"Sujit S","T Balasubramaniyan","T Dinesh Kumar","T Rajarajan","Thomas Joseph","V Balaraman","V Chandrasekaran","V Chiranjeevi","V Murugesan","V Vivek",
"V Rajakumar","Venkatesh","Vijaya Sethumadhavan","D Sri Ramulu","K Sampath Kumar","M Shanmuga Perumal","M Sivakar","P Soundara Pandia","Prabhakaran","R Saravanan",
"R M Hemanath","S Palani Rajan","T Dhinakaran","A Prabhakaran","G Venu","Ilangovan Veerappan","K S Ramalinga","Krishnam Raju","Mangalakumar V","N Balakrishnan","N Chezhiyan",
"P Ramachandran","R Arul","Ramaswami","S Kandasamy","S P Thiagarajan","S Goutham","Vivek Pathak","Hemacnhandra"," K Kumar","K Narayanan",
"N.Murugesan","J A Premkumar", "Ramkrishnan","Ganesha","N Mohandas ","T Rajendra","K Jaisuresh","P.Giri ","R Gopal Krishnan","S Kandasamy","Sps. Subramaniam","Vel Arvind",
"J.Subramanian","K. Sudhakar","S Saravanan","V kannan","K Abirami","K G Shivakumar","P Jones Ronald","P Nagarajan","V Karthikeyan","M Balaji","J Balasubramaniam ","Kanna Bhaba ",
"P K Senthil Kumar","Premanand J A","V Ramasubramanian","Premanand J A"]

export const S = (city) => {	 
	const regexp =  new RegExp(city,"g")
	let a = [];
	let s=""
	for(let i=0;i<c.length;i++){
		s = c[i].match(regexp)
		if( s != null){
			a.push(c[i])
		}
	}	
	return(a);
}
export const name = (name) => {	 

	const regexp =  new RegExp(name,"g")
	let a = [];
	let s=""
	for(let i=0;i<names.length;i++){
		s = names[i].match(regexp)
		if( s != null){
			a.push(names[i])
		}
	}	
	return(a);
}
export const gfr = (age,sc,gender,raceAF) => {
		
		let leadNum,power,bottom;
		
		if(raceAF == "Yes"){
			if(gender == "Female"){
				leadNum = 166;
				bottom = .7;
				if(sc <= .7){
					power = -.329;
				}
				else{
					power = -1.209;
				}
			}
			else{
				leadNum = 163;
				bottom = .9;
				if(sc <= .9){
					power = -.411;
				}
				else{
					power = -1.209;
				}
			}
		}
		else{
			if(gender == "Female"){
				leadNum = 144;
				bottom = .7;
				if(sc <= .7){
					power = -.329;
				}
				else{
					power = -1.209;
				}
			}
			else{
				leadNum = 141;
				bottom = .9;
				if(sc <= .9){
					power = -.411;
				}
				else{
					power = -1.209;
				}
			}	
		}
		
		
		let GFRValue = Math.round(leadNum * Math.pow((sc/bottom),power) * Math.pow(.993,age));
		
		let stage;
		if(GFRValue >= 90){
			stage = "1";
		}
		else if(GFRValue >= 60 && GFRValue <= 89){
			stage = "2";
		}
		else if(GFRValue >= 45 && GFRValue <= 59){
			stage = "3A";
		}
		else if(GFRValue >= 30 && GFRValue <= 44){
			stage = "3B";
		}
		else if(GFRValue >= 15 && GFRValue <= 29){
			stage = "4";
		}
		else if(GFRValue >= 0 && GFRValue <= 14){
			stage = "5";
		}
		const result=[GFRValue + " mL/min/1.73 m^2","Stage " + stage + " Chronic Kidney Disease"]
		
		return(result)
		
}