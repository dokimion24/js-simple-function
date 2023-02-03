# pagination

## 목표

pagination 을 UI로 구현해봄으로써 앞으로 현업이나 개인적인 개발을 할 때 활용할 수 있는 것을 목표로 한다.

## 마감 시간

`~ 2023.2.10(금)` `00시`까지

## reference

- 디자인

[pagination 디자인 (pagination) 예시](https://fireart.studio/blog/pagination-design-examples/)

[웹 페이지 디자인 (목록 + pagination) 예시](https://agentestudio.com/blog/pagination-design-examples-and-best-practices)

- 예제 사이트
  [https://codemyui.com/tag/pagination-examples/](https://codemyui.com/tag/pagination-examples/)

(상세페이지에서 해당 예시에 대한 코드펜(embed) 제공)

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

- 필요할 경우 위의 reference 사이트를 참고해서 `pagination` UI를 구현
- `/pagination/OhDaeSung` 과 같이 자신의 이름으로 폴더를 만들고 해당 폴더 안에 index.html과 같은 `소스파일` 및 필요할 경우 `package.json`과 같은 설정파일을 활용하여 구현한 뒤 팀 레포지토리의 `main` 브랜치로 `PR`
- `commit`할 때 최대한 `convention`을 지켜서 PR해주는 것을 권장함
