Table category
 **CATEGORY_ID**
 **NAME**
 **DESCRIPTION**

 Table 2: customer
 CUST_ID
 FIRST_NAME
 LAST_NAME
 PHONE_NUMBER

 Table 3: employees
 EMPLOYEE_ID
 FIRST_NAME
 LAST_NAME
 EMAIL
 PHONE_NUMBER
 JOB_ID
 HIRED_DATE
 LOCATION_ID

 Table 4: job
 JOB_ID
 JOB_TITLE
 SALARY

 Table 5: location
 LOCATION_ID
 PROVINCE  **location within a country**
 CITY
 STREET

 Table 6: manager
 FIRST_NAME
 LAST_NAME
 LOCATION_ID
 EMAIL
 PHONE_NUMBER

 Table 7: product
 PRODUCT_ID
 NAME
 DESCRIPTION
 QTY_STOCK
 PRICE
 CATEGORY_ID

 Table 8: supplier
 SUPPLIER_ID
 COMPANY_NAME  	supplier’s the company name
 LOCATION_ID
 PHONE_NUMBER

 Table 9: type
 TYPE_ID
 TYPE  type of user account registered

 Table 10: users
 ID
 FIRST_NAME
 LAST_NAME
 USERNAME
 PASSWORD
 TYPE_ID
 LOCATION_ID
 PHONE_NUMBER

category	CATEGORY_ID	PK
customer	CUST_ID	PK
employee	EMPLOYEE_ID	PK
job	JOB_ID	PK
location	LOCATION_ID	PK
product	PRODUCT_ID	PK
supplier	SUPPLIER_ID	PK
type	TYPE_ID	PK
users	ID	PK
employee	LOCATION_ID	FK
employee	JOB_ID	FK
manager	LOCATION_ID	FK
product	CATEGORY_ID	FK
supplier	LOCATION_ID	FK
users	TYPE_ID	FK
users	LOCATION_ID	FK


CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;    


CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



