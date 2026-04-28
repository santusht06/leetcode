SELECT ip, COUNT(*) AS invalid_count
FROM logs
WHERE
    -- not exactly 3 dots → not 4 parts
    ip NOT REGEXP '^([0-9]+\\.){3}[0-9]+$'
    
    OR
    
    -- any octet > 255 OR leading zero
    (
        -- extract parts
        (
            CAST(SUBSTRING_INDEX(ip, '.', 1) AS UNSIGNED) > 255
            OR (LENGTH(SUBSTRING_INDEX(ip, '.', 1)) > 1 AND LEFT(SUBSTRING_INDEX(ip, '.', 1),1) = '0')
        )
        OR
        (
            CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(ip, '.', 2), '.', -1) AS UNSIGNED) > 255
            OR (LENGTH(SUBSTRING_INDEX(SUBSTRING_INDEX(ip, '.', 2), '.', -1)) > 1 
                AND LEFT(SUBSTRING_INDEX(SUBSTRING_INDEX(ip, '.', 2), '.', -1),1) = '0')
        )
        OR
        (
            CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(ip, '.', 3), '.', -1) AS UNSIGNED) > 255
            OR (LENGTH(SUBSTRING_INDEX(SUBSTRING_INDEX(ip, '.', 3), '.', -1)) > 1 
                AND LEFT(SUBSTRING_INDEX(SUBSTRING_INDEX(ip, '.', 3), '.', -1),1) = '0')
        )
        OR
        (
            CAST(SUBSTRING_INDEX(ip, '.', -1) AS UNSIGNED) > 255
            OR (LENGTH(SUBSTRING_INDEX(ip, '.', -1)) > 1 
                AND LEFT(SUBSTRING_INDEX(ip, '.', -1),1) = '0')
        )
    )
GROUP BY ip
ORDER BY invalid_count DESC, ip DESC;