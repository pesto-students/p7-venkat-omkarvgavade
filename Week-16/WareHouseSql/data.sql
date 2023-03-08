

-- Active: 1678094810998@@127.0.0.1@3306@WareHouse
/* create DATABASE WareHouse; */
/* inserting values in cities */

insert into cities values (1234,"Mumbai","Maharashtra");
insert into cities values (1233,"Pune","Maharashtra");
insert into cities values (1235,"Nagpur","Maharashtra");
insert into cities values (1236,"Delhi","Delhi");
insert into cities values (1237,"Shimla","HP");
insert into cities values (1238,"Bangalore","Karnataka");
insert into cities values (1239,"Chennai","TamilNadu");
insert into cities values (1240,"Kolhapur","Maharashtra");
insert into cities values (1241,"Bhopal","MadhyaPradesh");
insert into cities values (1242,"Raipur","Chattisgarh");
insert into cities values (1243,"Gurgaon","Hariyana");
insert into cities values (1244,"Noida","UtterPradesh");


insert into warehouses values(2345,'abcd','Pune','{"a":"b"}',1233);
insert into warehouses values(2346,'abcd','Pune','{"a":"b"}',1233);
insert into warehouses values(2347,'abce','Pune','{"a":"b"}',1233);


insert into warehouses values(2348,'abcd','Mumbai','{"a":"b"}',1234);
insert into warehouses values(2349,'abcd','Mumbai','{"a":"b"}',1234);
insert into warehouses values(2350,'abce','Mumbai','{"a":"b"}',1234);


insert into warehouses values(2351,'abcd','Nagpur','{"a":"b"}',1235);
insert into warehouses values(2352,'abcd','Nagpur','{"a":"b"}',1235);
insert into warehouses values(2353,'abce','Nagpur','{"a":"b"}',1235);


insert into warehouses values(2354,'abcd','Delhi','{"a":"b"}',1236);
insert into warehouses values(2355,'abcd','Delhi','{"a":"b"}',1236);
insert into warehouses values(2356,'abce','Delhi','{"a":"b"}',1236);


insert into warehouses values(2357,'abcd','Shimla','{"a":"b"}',1237);
insert into warehouses values(2358,'abcd','Shimla','{"a":"b"}',1237);
insert into warehouses values(2359,'abce','Shimla','{"a":"b"}',1237);


insert into warehouses values(2360,'abcd','Pune','{"a":"b"}',1238);
insert into warehouses values(2361,'abcd','Pune','{"a":"b"}',1239);
insert into warehouses values(2362,'abce','Pune','{"a":"b"}',1240);





insert into stores values(3456,'abcd','Pune',2360);
insert into stores values(3457,'abce','Pune',2360);

insert into stores values(3458,'abcd','Mumbai',2348);
insert into stores values(3459,'abce','Mumbai',2348);

insert into stores values(3460,'abcd','Nagpur',2351);
insert into stores values(3461,'abce','Nagpur',2351);





insert into customer values(4567,"Omkar","At-Mumbai","Mumbai");
insert into customer values(4568,"Suraj","At-Pune","Pune");
insert into customer values(4569,"Bhairu","At-Pune","Pune");
insert into customer values(4570,"Ramesh","At-Nagpur","Nagpur");
insert into customer values(4571,"Vishal","At-Delhi","Delhi");
insert into customer values(4572,"Adhiraj","At-Shimla","Shimla");
insert into customer values(4573,"Prasad","At-Bhopal","Bhopal");
insert into customer values(4574,'Mr. Patil',"At-Mumbai","Mumbai");




insert into orders values(5678,'2023-01-12',4567);
insert into orders values(5679,'2023-01-13',4567);
insert into orders values(5680,'2023-01-14',4567);
insert into orders values(5681,'2023-01-15',4568);
insert into orders values(5682,'2023-01-16',4568);
insert into orders values(5683,'2023-01-17',4568);
insert into orders values(5684,'2023-01-12',4569);
insert into orders values(5685,'2023-01-13',4569);
insert into orders values(5686,'2023-01-14',4569);
insert into orders values(5687,'2023-01-18',4570);
insert into orders values(5688,'2023-01-20',4570);
insert into orders values(5689,'2023-01-21',4570);
insert into orders values(5690,'2023-01-22',4571);
insert into orders values(5691,'2023-01-20',4571);
insert into orders values(5692,'2023-01-25',4571);
insert into orders values(5693,'2023-01-26',4572);
insert into orders values(5694,'2023-01-20',4572);
insert into orders values(5695,'2023-01-12',4572);
insert into orders values(5696,'2023-01-13',4573);
insert into orders values(5697,'2023-01-14',4573);
insert into orders values(5702,'2023-01-30',4574);
insert into orders values(5699,'2023-01-30',4574);
insert into orders values(5700,'2023-01-31',4574);
insert into orders values(5701,'2023-01-12',4574);




insert into items values(6789,'Rice',23.4,500);
insert into items values(6790,'Sugar',15,100);
insert into items values(6791,'Tea',20,700);
insert into items values(6792,'Soap',100,800);
insert into items values(6793,'Potatoes',200,299);
insert into items values(6794,'Tomatoes',123.34,400);
insert into items values(6795,'Ginger',23,234);
insert into items values(6796,'LadyFinger',89,600);
insert into items values(6797,'Bottle',34,500);
insert into items values(6798,'Glass Bottle',34.5,389);
insert into items values(6799,'laptop',55,700);
insert into items values(6800,'PC',122,900);
insert into items values(6801,'Bag',111,122);
insert into items values(6802,'Charger',23.4,567);
insert into items values(6803,'Mobile',23.4,123);




insert into ordered_items values(5695,6801,10);
insert into ordered_items values(5681,6789,9);
insert into ordered_items values(5682,6790,4);
insert into ordered_items values(5683,6791,5);
insert into ordered_items values(5684,6789,7);
insert into ordered_items values(5685,6790,89);
insert into ordered_items values(5686,6793,12);
insert into ordered_items values(5687,6794,45);
insert into ordered_items values(5689,6795,2);
insert into ordered_items values(5690,6798,34);
insert into ordered_items values(5691,6789,45);
insert into ordered_items values(5692,6789,23);
insert into ordered_items values(5693,6799,22);


insert into ordered_items values(5694,6801,10);
insert into ordered_items values(5695,6798,10);
insert into ordered_items values(5696,6794,10);
insert into ordered_items values(5697,6795,10);


insert into ordered_items values(5702,6789,3);
insert into ordered_items values(5699,6790,5);
insert into ordered_items values(5700,6792,10);
insert into ordered_items values(5701,6793,11);





insert into stores_items values(3456,6794);
insert into stores_items values(3456,6795);
insert into stores_items values(3456,6796);
insert into stores_items values(3456,6797);
insert into stores_items values(3456,6798);
insert into stores_items values(3457,6789);
insert into stores_items values(3457,6790);
insert into stores_items values(3457,6791);
insert into stores_items values(3458,6794);
insert into stores_items values(3458,6795);
insert into stores_items values(3459,6799);
insert into stores_items values(3459,6793);
insert into stores_items values(3459,6794);
insert into stores_items values(3460,6795);
insert into stores_items values(3461,6799);
insert into stores_items values(3461,6801);

