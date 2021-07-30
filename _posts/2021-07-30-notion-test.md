---
layout: post
title:  Git commit 가이드
categories: [content, git]
---

# Git commit 가이드

공유: 박상민, Daeup Kim, 서원익, TAXTALK 파스칼, TAXTALK Pooh
상태: 진행 중
속성: GIT
작성일: July 26, 2021 12:25 PM
작성자: hyun chul Lee
최종 편집 일시: July 27, 2021 10:29 PM
최종 편집자: hyun chul Lee

### Git commit message

HEAD 에 반영된 변화에 대한 설명

공동작업을 위한 일원화 된 commit message rule 필요

### How to

1. **커밋 유형 지정**
2. **제목**
    1. '커밋유형 : 텍스트' 형태 사용
    2. 한 행으로 50자
    3. 첫 글자 대문자 시작
    4. 마침표 종료 금지
    5. 명령문 사용
    6. 커밋 유형 지정
        - FEAT : 새로운 기능의 추가
        - FIX: 버그 수정
        - DOCS: 문서 수정
        - STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
        - REFACTOR: 코드 리펙토링
        - TEST: 테스트 코트, 리펙토링 테스트 코드 추가
        - CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)
3. **제목과 본문을 빈 행으로 분리**
4. **본문**
    1. 행단위 72자 limit
    2. hanging/negative indent 사용

        ![Git%20commit%20%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%20d59fd79400ad47fb92039762d7433339/Untitled.png](Git%20commit%20%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%20d59fd79400ad47fb92039762d7433339/Untitled.png)

    3. 변경한 내용과 이유 설명 (what, why better then how)
    4. 확실하게 설명 추가 (검토자가 할머니라고 생각할 것)
    5. 코드 자체로 의미 전달하려고 하지 말 것
5. **팀에서 정한 Commit 규칙을 따르자**

### GIT commit template 적용하기

1. 작성
    - 절대경로

        ex) /Users/taxtalk/Desktop/taxly/.gitmessage

    - 상대경로

        git repository root 부터 시작 

2. config 적용
    - git config --global commit.template <template 파일명>

ver 0.1

```sql
# title | 50자 이내, 문장끝 마침표 금지 ex) feat : 로그인 기능 추가

# blank |  제목/본문 분리, 하단 공백 유지

# content | 여러 줄의 메시지를 작성할 땐 "-"로 구분 (한 줄은 72자 이내)

# footer | 현재 커밋과 관련된 이슈 번호 추가 ex) Close #7

# 😄 type list
# feat : 새로운 기능 추가
# fix : 버그 수정
# docs : 문서 수정
# test : 테스트 코드 추가
# refact : 코드 리팩토링
# style : 코드 의미에 영향을 주지 않는 변경사항
# chore : 빌드 부분 혹은 패키지 매니저 수정사항
```