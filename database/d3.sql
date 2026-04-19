SELECT id, visit_date, people
FROM (
    SELECT *,
           id - ROW_NUMBER() OVER (ORDER BY id) AS grp
    FROM Stadium
    WHERE people >= 100
) t
GROUP BY grp
HAVING COUNT(*) >= 3
JOIN (
    SELECT *,
           id - ROW_NUMBER() OVER (ORDER BY id) AS grp
    FROM Stadium
    WHERE people >= 100
) t2 USING (grp)
ORDER BY visit_date;