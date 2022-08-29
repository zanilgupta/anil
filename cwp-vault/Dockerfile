# Copy the binary and config
FROM alpine:3.14

RUN addgroup -S app && adduser -S -G app app

RUN mkdir /app
RUN chown -R app:app /app

COPY --chown=app:app --chmod=0740 --from=builder /app/cmd/main ./app/cmd/main

USER app

EXPOSE 6425 6450

WORKDIR /app/cmd
CMD ["./main"]