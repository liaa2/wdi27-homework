class MagicController < ApplicationController
    def answer
        @array = [
            "It is certain",
            "Absolutely",
            "Affirmative",
            "Reply hazy try again",
            "Ask again later",
            "Cannot predict now",
            "Don't count on it",
            "My reply is no",
            "Outlook not so good",
            "Very doubtful"
        ]
    end
end