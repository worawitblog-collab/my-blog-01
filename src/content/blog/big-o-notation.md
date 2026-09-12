---
title: 'Big-O Notation: วัดความเร็วของอัลกอริทึม'
description: 'ทำไม O(n log n) ถึงต่างจาก O(n²) และเหตุใด Big-O จึงเป็นภาษากลางของนักพัฒนา'
category: computer
cover: '/covers/big-o-notation.svg'
pubDate: 2026-07-30
tags: ['อัลกอริทึม', 'พื้นฐาน']
author: admin
---

## Big-O คืออะไร

Big-O notation บรรยาย**อัตราการเติบโต**ของเวลา (หรือหน่วยความจำ) ที่อัลกอริทึมใช้
เมื่อขนาดข้อมูล $n$ ใหญ่ขึ้น เราสนใจแค่ "รูปร่าง" ของกราฟ ไม่ใช่ค่าคงตัว

$$
f(n) = O(g(n)) \iff \exists\, c > 0,\ n_0 : f(n) \le c \cdot g(n)\ \text{สำหรับ}\ n \ge n_0
$$

## ลำดับความเร็วที่ควรจำ

| Notation | ชื่อ | ตัวอย่าง |
| --- | --- | --- |
| $O(1)$ | คงที่ | เข้าถึงสมาชิก array |
| $O(\log n)$ | ลอการิทึม | Binary Search |
| $O(n)$ | เชิงเส้น | วน loop ผ่าน array |
| $O(n \log n)$ | linearithmic | Merge Sort, Heap Sort |
| $O(n^2)$ | กำลังสอง | Bubble Sort, double loop |
| $O(2^n)$ | เลขชี้กำลัง | ตรวจทุก subset |

## ทำไมมันสำคัญ

สมมติคอมพิวเตอร์ทำงาน $10^9$ operations/second:

- `O(n)` กับ $n = 10^9$ → **~1 วินาที**
- `O(n²)` กับ $n = 10^9$ → **~31.7 ปี**
- `O(2ⁿ)` กับ $n = 100$ → เกินอายุจักรวาลหลายเท่า

```python
def contains(nums, target):
    # O(n) - Linear Search
    for x in nums:
        if x == target:
            return True
    return False
```

## ข้อควรระวัง

1. **Big-O ไม่ใช่เวลาจริง** — อัลกอริทึม O(n²) อาจเร็วกว่า O(n) ได้เมื่อ n เล็ก
   เพราะค่าคงตัว (constant factor) ต่างกัน
2. **ดูกรณีเลวร้าย vs เฉลี่ย** — Quicksort เป็น O(n log n) เฉลี่ย แต่ O(n²) ในกรณีเลวร้าย
3. **อย่าลืมหน่วยความจำ** — Space complexity ก็สำคัญเท่ากับ Time complexity

> กฎทอง: เปลี่ยนจาก O(n²) เป็น O(n log n) มักต้องคิดเพิ่ม 10 นาที
> แต่ประหยัดเวลารันได้เป็นชั่วโมงเมื่อข้อมูลใหญ่
