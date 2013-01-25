
	var win1 = Titanium.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#fff',
		layout:'vertical'
	});



	var platform = Ti.Platform.osname;
	
	var contentView = Ti.UI.createView({
		backgroundColor : "#fff",
		viewType : 'faq_list',
		height : Ti.UI.FILL
	});	
	win1.add(contentView);
	
	var container = Ti.UI.createView({
		backgroundColor : "#fff",
		height : Ti.UI.FILL,
		bottom : 20
	});
	contentView.add(container);
	

	var view1 = Ti.UI.createScrollView({
		top : 80,
		backgroundColor : "#fff",
		height : Ti.UI.FILL,
		layout : 'vertical',
		showVerticalScrollIndicator: true
	});
	container.add(view1);

	var responseString = {
		"faqs" : {
			"en" : [{
				"topic" : "Shukran Membership",
				"questions" : [{
					"q" : "What is Shukran?",
					"a" : "Shukran is the Landmark Group's rewards programme. If you shop often at our outlets across the GCC and Jordan, this programme adds value to your shopping experience by offering great rewards and benefits. By signing up for the programme, you get:\n    - Free membership for life\n    -  Points and rewards across a wide range of participating outlets\n    -  The chance to earn points even during sales and promotions\n    -  Exclusive offers, including special invitations to in-store activities and sale previews"
				}, {
					"q" : "Sounds exciting! How do I sign up?",
					"a" : "There are two different ways to enroll in the programme:\n    - Via a printed application form available at all participating outlets\n     -  Through online registration on the Shukran website www.shukranrewards.com"
				}, {
					"q" : "Is there a minimum spend amount or a joining fee to become a Shukran member?",
					"a" : "No. Membership to Shukran is free for life. Just sign up at any of our participating outlets or online through our website, and you're ready to enjoy the programme."
				}, {
					"q" : "What happens after I sign up?",
					"a" : "If you signed up at a participating outlet, you'll have received your non-personalized member ship card immediately./nIf you signed up online, your membership number will be displayed on the confirmation screen. Quote this number to earn points when shopping at our participating outlets."
				}, {
					"q" : "The application asked for personal information. What about my privacy?",
					"a" : "Your privacy is important to us. We restrict access to non-public personal information about our members and maintain strict procedural safeguards to protect it."
				}, {
					"q" : "Does Shukran offer a family membership option?",
					"a" : "At present, Shukran is for individual members only."
				}, {
					"q" : "My membership information has changed. How do I update my profile?",
					"a" : "You can update your Shukran Membership Profile by logging into your account online or by contacting us at 800 SHUKRAN (748 5726) or +971 4 811 3499 if you’re outside the UAE."
				}, {
					"q" : "My membership card looks like a credit card. Can I use it like one?",
					"a" : "No, your Shukran Membership card is not a credit card, and cannot be used as a method of payment. Present it along with your payment at the time of purchase at participating outlets to earn points towards great rewards."
				}, {
					"q" : "Can my Shukran membership ever become inactive?",
					"a" : "Your Shukran membership is considered inactive if there are no transactions in the account for a period of 12 months. However, points that are in your account remain current for a period of 24 months. If you don't reactivate your membership during this period, the points expire. To reactivate your account, just use your membership card at any participating outlet."
				}]
			}, {
				"topic" : "Replacement Cards",
				"questions" : [{
					"q" : "I lost my membership card. How do I get a replacement?",
					"a" : "To order a replacement card, call the Member Services Centre. A replacement card costs 250 points, which will be deducted from your account."
				}, {
					"q" : "If I request a replacement card, will it have the same account number",
					"a" : "In the interest of your security, replacement cards will have a new account number."
				}, {
					"q" : "Since my replacement card has a new account number, what happens to the accumulated points on my old card?",
					"a" : "IDon't worry – the points from your old card will be carried forward to the new account number after the deduction of 250 points (the cost of the replacement card)."
				}]
			}, {
				"topic" : "Earning Points",
				"questions" : [{
					"q" : "How do I earn points?",
					"a" : "To start earning points, simply show your Shukran membership card or quote your membership number each time you shop, dine or play at any of our participating outlets."
				}, {
					"q" : "On what products can I earn points?",
					"a" : "With Shukran, you can earn points on all products except those from which you already benefit through other programmes or co-marketing partnerships."
				}, {
					"q" : "How many points do I earn for my purchases?",
					"a" : "The number of points you earn depends on the amount and period of your purchase, and the brand at which it is made.\n\nCheck out our Points Calculator below, it will help you figure out how many points you'd earn through your purchases."
				}, {
					"q" : "Can I earn and redeem Shukran points across the different countries in which the Programme operates?",
					"a" : "At the moment, Shukran points can be earned and redeemed only in the country where your membership card was issued."
				}, {
					"q" : "Can I earn points if I don't have my Shukran membership card or number at hand?",
					"a" : "You cannot earn points without showing your membership card or quoting your membership number. You can, however, call us at 800 SHUKRAN (748 5726) or +971 4 811 3499 if you’re outside the UAE to get your number before payment so you can earn points on your purchase."
				}, {
					"q" : "What's the difference between Base and Bonus Points?",
					"a" : "Base Points are points earned on everyday transactions during sale and non-sale periods. Bonus Points are special points awarded during a promotion, for example: 'Earn a bonus 200 points during the month of May'."
				}, {
					"q" : "How long does it take for points to reflect in my account?",
					"a" : "Points reach your account 24 hours after you make your purchase."
				}, {
					"q" : "How soon can I use my points after purchase?",
					"a" : "Points are available for redemption 14 days after a purchase is made. Your Shukran Rewards Certificate will be generated against accumulated points every quarter."
				}, {
					"q" : "Can I transfer Shukran points?",
					"a" : "No, you cannot transfer your Shukran points."
				}, {
					"q" : "If I return a purchase, what happens to the Shukran points I earned on it?",
					"a" : "If you return a purchase for a cash refund or credit note, the Shukran points earned will be reversed from your account. When you present a credit note for another purchase, you qualify to earn Shukran points against that new purchase."
				}, {
					"q" : "I forgot to present my membership card at the time of purchase. Can I submit any proof of purchase and earn points retrospectively?",
					"a" : "No, Shukran points cannot be earned retrospectively. You must present your card or quote your membership number at the time of purchase to earn points."
				}, {
					"q" : "How do I check my points balance?",
					"a" : "ou can check your points balance in two ways:\n    -   1. Call us at 800 SHUKRAN (748 5726) or +971 4 811 3499 if you’re outside the UAE and quote your membership number\n    -   2. Log on to www.shukranrewards.com to check the details yourself. You need to pre-register to access your account information."
				}, {
					"q" : "When do my points expire?",
					"a" : "Base, Bonus and Miscellaneous points are valid for 24 months from the date they were earned. Once expired, points cannot be credited back to your account"
				}]
			}, {
				"topic" : "Rewards Certificates",
				"questions" : [{
					"q" : "How many points do I need to get a Rewards Certificate?",
					"a" : "You need to have accumulated at least 500 points to receive a Rewards Certificate."
				}, {
					"q" : "When do I get my Rewards Certificate?",
					"a" : "You get your Rewards Certificate once each quarter depending on the preference indicated on your membership application."
				}, {
					"q" : "Until when is my Rewards Certificate valid?",
					"a" : "Check the Rewards Certificate for the dates of validity. Certificates that have passed their expiration date can't be redeemed."
				}, {
					"q" : "What should I do if I've lost or not received my Rewards Certificate?",
					"a" : "You can request a replacement Certificate by contacting us at 800 SHUKRAN (748 5726) or +971 4 811 3499 if you’re outside the UAE."
				}, {
					"q" : "My Rewards Certificate is going to expire before I'm able to use it. Can I request an extension of validity?",
					"a" : "Yes, you can contact us at 800 SHUKRAN (748 5726) or +971 4 811 3499 if you’re outside the UAE.to request an extension of validity."
				}, {
					"q" : "Can I put my upcoming quarterly Rewards Certificate on hold?",
					"a" : "Sure. Just contact the Member Services Centre to ask for your Rewards Certificate to be put on hold, and it will be sent to you during the following quarter. Note that a Rewards Certificate can't be put on hold for longer than 90 days, and the on-hold request can be made only once a year."
				}]
			}, {
				"topic" : "Gift Vouchers",
				"questions" : [{
					"q" : "What is a Gift Voucher?",
					"a" : "Shukran Gift Vouchers work effectively as cash at participating outlets, and come in denominations of AED 25 (or its equivalent in your country). You will receive a Shukran Gift Voucher in either of these circumstances:\n    -   As 'change' when redeeming your Rewards Certificate, that is, if the certificate amount is greater than the purchase price\n    -   If you wish to break your Rewards Certificate into smaller denominations"
				}, {
					"q" : "In which outlets are Gift Vouchers accepted?",
					"a" : "Shukran Gift Vouchers are accepted in all outlets participating in the Shukran Rewards Programme."
				}, {
					"q" : "Until when is a Gift Voucher valid?",
					"a" : "A Shukran Gift Voucher is valid for three months from the date of issue. It cannot be used or re-issued once the expiration date has passed."
				}, {
					"q" : "I think I've lost my Gift Voucher. Can I get a replacement?",
					"a" : "Shukran Gift Vouchers are as good as cash at participating outlets, and so we cannot send you a replacement for lost Vouchers."
				}]
			}, {
				"topic" : "Redeeming Awards",
				"questions" : [{
					"q" : "How do I redeem my Rewards Certificate or Gift Voucher?",
					"a" : "You can redeem your Rewards Certificate or Gift Voucher at any participating outlet. For your own security, you also need to present your Shukran membership card at this time.\nIf you're redeeming a Shukran Rewards Certificate at any Food & Beverage or Hospitality outlet, please remember to redeem the full amount of the certificate - we're unable to exchange the certificates for Gift Vouchers at these outlets."
				}, {
					"q" : "Will I earn points when redeeming my Gift Voucher?",
					"a" : "No, you don't earn points when redeeming your Gift Vouchers."
				}, {
					"q" : "For which products can I redeem my Rewards Certificate or Gift Voucher?",
					"a" : "You can redeem your Rewards Certificate or Gift Voucher for any product in any participating outlet during Sale and Non-sale periods, except on products already benefiting from other programmes or co-marketing partnerships."
				}]
			}],
			"ar" : [{
				"topic" : "FAQ Topic 1",
				"questions" : [{
					"q" : "Question 1",
					"a" : "THE DETAILED ANSWER FOR QUESTION 1 UNDER TOPIC 1"
				}, {
					"q" : "Question 2",
					"a" : "THE DETAILED ANSWER FOR QUESTION 2 UNDER TOPIC 1"
				}, {
					"q" : "Question 3",
					"a" : "THE DETAILED ANSWER FOR QUESTION 3 UNDER TOPIC 1"
				}]
			}, {
				"topic" : "FAQ Topic 2",
				"questions" : [{
					"q" : "Question 1",
					"a" : "THE DETAILED ANSWER FOR QUESTION 1 UNDER TOPIC 2"
				}, {
					"q" : "Question 2",
					"a" : "THE DETAILED ANSWER FOR QUESTION 2 UNDER TOPIC 2"
				}, {
					"q" : "Question 3",
					"a" : "THE DETAILED ANSWER FOR QUESTION 3 UNDER TOPIC 2"
				}]
			}, {
				"topic" : "FAQ Topic 3",
				"questions" : [{
					"q" : "Question 1",
					"a" : "THE DETAILED ANSWER FOR QUESTION 1 UNDER TOPIC 3"
				}, {
					"q" : "Question 2",
					"a" : "THE DETAILED ANSWER FOR QUESTION 2 UNDER TOPIC 3"
				}, {
					"q" : "Question 3",
					"a" : "THE DETAILED ANSWER FOR QUESTION 3 UNDER TOPIC 3"
				}]
			}]
		}
	};

	//alert("responseString.faqs.en.length " + responseString.faqs.en.length);
	var tmpIndex = 0, topicView = [], qaView = [], qTitle = [], ansText = [], previousIndex = null, previousAnsIndex = null;
	for (var i = 0, tlen = responseString.faqs.en.length; i < tlen; i++) {
		Ti.API.info("=============== tlen-1 >> " + tlen-1 + "<<==============="+tlen-1);
		Ti.API.info("===============>> " + responseString.faqs.en[i].topic + "<<==============="+tlen-1);
		
		topicView[i] = Ti.UI.createView({
			topicId : i,
			top : 0,
			left : 0,
			right : 0,
			backgroundColor : "#fff",
			height : Ti.UI.SIZE
		});
		view1.add(topicView[i]);

		var separator1 = Ti.UI.createView({
			top : 0,
			left : 0,
			right : 0,
			backgroundColor : "#ccc",
			height : 1
		});
		topicView[i].add(separator1);

		var topView = Ti.UI.createView({
			top:10,
			bottom:10,
			left : 0,
			right : 0,
			layout : 'horizontal',
			height : Ti.UI.SIZE
		});
		topicView[i].add(topView)

		var topImg = Ti.UI.createLabel({
			left : 10,
			height : 15,
			width : 15,
			backgroundImage : 'plus.png',
		});
		topicView[i].topImg = topImg;
		topView.add(topImg);

		var topicTitle = Ti.UI.createLabel({
			topicId : i,
			left : 20,
			text : responseString.faqs.en[i].topic.toUpperCase(),
			textAlign : 'left',
			color : '#000',
			height : Ti.UI.SIZE,
			font : {
				fontSize : 15,
				fontFamily : 'Helvetica Neue'
			}
		});
		topView.add(topicTitle);
		
		qaView[i] = Ti.UI.createView({
			top : 0,
			left : 0,
			right : 0,
			backgroundColor : "yellow",
			height : 0,
			layout : 'vertical'
		});
		view1.add(qaView[i]);
		
		var qaViewSeparator = Ti.UI.createView({
			top : 0,
			left : 0,
			right : 0,
			height : 1,
			backgroundColor:"#ccc"
		});
		qaView[i].add(qaViewSeparator);
		
		var toggelTile = function(currentId){
			Ti.API.info("this.topicId = " + currentId + " - ");
			Ti.API.info("previousIndex " + previousIndex);

			if (previousIndex || previousIndex == 0) {
				if (previousIndex == currentId) {
					//alert(qaView[previousIndex].isActive);
					if (qaView[currentId].isActive == "true") {// if previousIndex == currentId close the tab if it is active
						qaView[currentId].height = 0;
						qaView[currentId].isActive = "false";
						topicView[currentId].topImg.backgroundImage = 'plus.png';
					} else {// if previousIndex == currentId close the tab if it is in active
						qaView[currentId].height = Ti.UI.SIZE;
						qaView[currentId].isActive = "true";
						topicView[currentId].topImg.backgroundImage ='minus.png';
					}
					return;
				} else {
					qaView[previousIndex].height = 0;
					qaView[previousIndex].isActive = "false";
					topicView[previousIndex].topImg.backgroundImage = 'plus.png';
				}
			}

			setTimeout(function() {
				qaView[currentId].height = Ti.UI.SIZE;
				qaView[currentId].isActive = "true";
				topicView[currentId].topImg.backgroundImage = 'minus.png';	// set isActive status
				Ti.API.info("setting height to " + currentId);
				previousIndex = currentId; 	// set previousIndex
			}, 100);
		}

		topicView[i].addEventListener('click', function(e) {
			toggelTile(this.topicId);
		});

		var toggelAnswer = function(cIndex){
			Ti.API.info("cIndex = " + cIndex + " - ");
			Ti.API.info("previousAnsIndex " + previousAnsIndex);

			if (previousAnsIndex || previousAnsIndex == 0) {
				if (previousAnsIndex == cIndex) {
					//alert(qaView[previousIndex].isActive);
					if (ansText[cIndex].isActive == "true") {// if previousAnsIndex == cIndex close the tab if it is active
						ansText[cIndex].height = 0;
						ansText[cIndex].isActive = "false";
					} else {// if previousAnsIndex == cIndex close the tab if it is in active
						ansText[cIndex].height = Ti.UI.SIZE;
						ansText[cIndex].isActive = "true";
					}
					return;
				} else {
					ansText[previousAnsIndex].applyProperties({height : 0});
					ansText[previousAnsIndex].isActive = "false";
				}
				
			}

			setTimeout(function() {
				ansText[cIndex].applyProperties({height : Ti.UI.SIZE});
				ansText[cIndex].isActive = "true"; 	// set isActive status
				previousAnsIndex = cIndex; 	// set previousAnsIndex
			}, 100);
			
			setTimeout(function() {
				qaView[0].applyProperties({height : Ti.UI.SIZE});
			}, 120);
		}
		

		for (var j = 0, qlen = responseString.faqs.en[i].questions.length; j < qlen; j++) {
			var qView = Ti.UI.createView({
				height : Ti.UI.SIZE,
				left : 25,
				right : 0
			});
			qaView[i].add(qView);
		
			if(j==0){
				qView.top = 10;
			}

			qTitle[tmpIndex] = Ti.UI.createLabel({
				left : 21,
				tmpIndex:tmpIndex,
				width : '80%',
				height : Ti.UI.SIZE,
				top : 0,
				text : responseString.faqs.en[i].questions[j].q,
				//backgroundColor:'green',
				textAlign : 'left',
				color : '#000',
				//backgroundColor:'green',
				font : {
					fontSize : 12,
					fontWeight : 'bold',
					fontFamily : 'Helvetica Neue'
				}
			});
			qView.add(qTitle[tmpIndex]);
			
			ansText[tmpIndex] = Ti.UI.createLabel({
				left : 44,
				top : 6,
				height : 0,
				//backgroundColor:'red',
				text : responseString.faqs.en[i].questions[j].a,
				textAlign : 'left',
				color : '#A7A7A7',
				font : {
					fontSize : 12,
					fontFamily : 'Helvetica Neue'
				}
			});
			qaView[i].add(ansText[tmpIndex]);

			qTitle[tmpIndex].addEventListener('click', function(e) {
				toggelAnswer(this.tmpIndex);
			});
			
			if(responseString.faqs.en[i].topic == "Earning Points" && j == 2){
				var pointCalcLabel = Ti.UI.createLabel({
					left : 43,
					top : 20,
					height:Ti.UI.SIZE,
					bottom : 20,
					text : "GO TO POINT CALCULATOR",
					textAlign : 'left',
					color : '#0e7aca',
					font : {
						fontSize : 14,
						fontWeight : 'bold',
						fontFamily : 'Helvetica Neue'
					}
				});
				qaView[i].add(pointCalcLabel);
				
				pointCalcLabel.addEventListener('click', function(e) {
					/*
					mainWindow.navTitle.text = '';
					helper.removeRightNavView();
					mainView.add(require('viewcontroller/en/points').pointsView(mainWindow, mainView,true));
				    */
				});
			}

			if (j < qlen - 1) {
				var midSeperator = Ti.UI.createView({
					top : 8,
					bottom : 8,
					left : 10,
					right : 10,
					backgroundColor : '#BBBBBB',
					height : 1,
				});
				qaView[i].add(midSeperator);
			}
			
			tmpIndex = tmpIndex + 1;
		}
	}

	var separator2 = Ti.UI.createView({
		bottom : 0,
		left : 0,
		right : 0,
		backgroundColor : "#ccc",
		height : 1
	});
	view1.add(separator2);


win1.open();
