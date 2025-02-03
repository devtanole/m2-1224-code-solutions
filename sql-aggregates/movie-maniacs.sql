select "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
       sum("amount") as "totalAmount"
      from "customers" as "c"
      join "payments" as "p" using ("customerId")
      group by "c"."customerId"
      order by "totalAmount" desc;
