SELECT student_id, subject, first_score, latest_score
FROM (
    SELECT *,
        FIRST_VALUE(score) OVER (PARTITION BY student_id, subject ORDER BY exam_date) AS first_score,
        FIRST_VALUE(score) OVER (PARTITION BY student_id, subject ORDER BY exam_date DESC) AS latest_score,
        COUNT(*) OVER (PARTITION BY student_id, subject) AS cnt
    FROM Scores
) t
WHERE cnt >= 2 AND latest_score > first_score
GROUP BY student_id, subject
ORDER BY student_id, subject;