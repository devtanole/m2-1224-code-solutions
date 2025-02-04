/* 10 largest amount, first/last name... payments + customers  */

select "amount", "firstName", "lastName"
    from "payments"
    join "customers" using ("customerId")
    order by "amount" desc
    limit 10;
