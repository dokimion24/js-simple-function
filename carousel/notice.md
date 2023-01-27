# carousel

## 목표

기존 swiper 라이브러리로 구현했었던 `carousel` 을 직접 구현해봄으로써, 개념의 학습 및 라이브러리의 동작 원리를 이해해서 좀 더 잘 활용하는 것에 도움이 되는 것을 목표로 함

## reference

[https://colorlib.com/wp/bootstrap-4-carousel/](https://colorlib.com/wp/bootstrap-4-carousel/)

## commit convention

|   prefix   |             의미              |
| :--------: | :---------------------------: |
|   `conf`   |         환경설정 관련         |
|   `docs`   |          문서화 작업          |
|   `feat`   |        기능 개발 관련         |
|   `fix`    |   오류 개선 혹은 버그 패치    |
| `refactor` |         리팩토링 관련         |
|   `test`   | 테스트 관련(jest, cypress...) |

## 진행 방식

- 위의 reference 사이트에서 제공하는 `carousel`의 20가지 예시 중 원하는 것을 골라서 구현
- `/carousel/OhDaeSung` 과 같이 자신의 이름으로 폴더를 만들고 해당 폴더 안에 index.html과 같은 소스를 작성하여 PR
- `commit`할 때 최대한 `convention`을 지켜서 PR해주는 것을 권장함
