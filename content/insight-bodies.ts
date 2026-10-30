import type { PortableTextBlock } from "@portabletext/react";
import { p, h2, li } from "@/lib/portable-text";

/**
 * The written note bodies. These render now and are the fallback once Sanity is
 * connected: a note published in Sanity with the same slug takes over automatically.
 * UK spelling, warm and practical, no em dashes.
 */
export const insightBodies: Record<string, PortableTextBlock[]> = {
  "phonics-screening-check": [
    p("The Year 1 phonics screening check is a short, one to one activity that happens in June. A teacher sits with your child and asks them to read forty words aloud. Twenty are real words and twenty are made up, and the aim is simply to see whether your child can use phonics to sound out and blend words they may never have seen before."),
    h2("Why the made up words?"),
    p("The invented words, often called alien words, are there on purpose. A child cannot have memorised them, so they have to decode: spot the sounds, say each one, and blend them together. A real word like 'sheep' could be remembered by sight, but 'vap' or 'glimp' can only be read by sounding it out. That is the exact skill the check is looking for."),
    h2("Three things worth practising at home"),
    li("Blending out loud. Say the sounds in a short word slowly, then run them together. Little and often beats one long session."),
    li("Spotting digraphs. Two letters that make one sound, like sh, ch, th, ai and ee, trip children up most. Point them out in everyday reading."),
    li("Reading a few silly words. Make up your own alien words together and giggle at them. It takes the pressure off and practises the real skill."),
    p("Please do not drill your child or let it feel like a test. Five relaxed minutes a few times a week is plenty, and confidence matters as much as accuracy. If your child is finding blending hard, that is exactly the sort of thing a few focused sessions can help with before the summer term."),
  ],

  "number-bonds": [
    p("Number bonds are the pairs of numbers that add up to a total. Bonds to ten are 6 and 4, 7 and 3, and so on. Bonds to twenty work the same way. They sound small, but they sit underneath a surprising amount of Key Stage 1 maths."),
    h2("Why they matter so much"),
    p("Once a child just knows that 6 and 4 make 10, they are no longer counting on their fingers for every sum. Addition, subtraction, adding near multiples of ten, and later column methods all lean on that instant recall. A child who is secure with bonds has spare attention for the actual problem. A child who is not spends all their effort on the counting and runs out of room to think."),
    h2("Ten minutes a week, without the homework feeling"),
    li("Play 'make ten'. Hold up some fingers and ask how many more to make ten. Swap over and let them quiz you."),
    li("Use a tub of ten objects. Hide some, show the rest, and work out how many are hidden."),
    li("Spot bonds in the day: two more cups needed to make ten, four more minutes until the timer."),
    p("Keep it quick and playful. The goal is recall that feels automatic, and that comes from frequent tiny bursts rather than worksheets. By the end of Year 2 these bonds should feel as familiar as a child's own name, and that is what makes Year 2 maths click."),
  ],

  "choosing-books": [
    p("Choosing a book that is the right level is one of the most useful things you can do for an early reader, and it is easy to get wrong in both directions. Too hard and reading becomes a battle. Too easy and there is nothing to learn. There is a simple rule that helps."),
    h2("The nine in ten rule"),
    p("A book is about right if your child can read roughly nine words out of every ten without help. That leaves a sensible number of new or tricky words to work at, while keeping the story flowing enough to enjoy and understand. If they are stuck on more than one word in ten, the book is too hard for reading alone, though it may be lovely for you to read to them."),
    h2("What to do with the tenth word"),
    li("Give them a moment. Let them try to sound it out before you jump in."),
    li("If they are stuck, say the word, let them repeat it and carry on. Keep the momentum."),
    li("Come back to one or two tricky words at the end rather than stopping the story each time."),
    h2("Why rereading is not a waste"),
    p("Reading the same book again is one of the best things a young reader can do. The second time, the words come faster, the expression improves and your child hears themselves succeeding. That fluency and confidence carries straight into the next book. Match the book to the phonics phase they are working on at school, and if you are not sure which that is, just ask their teacher or ask me."),
  ],

  "handwriting-grip": [
    p("When handwriting is messy, it is tempting to ask a child to slow down and try harder. Usually that is not the problem. Untidy writing at this age is almost always mechanical: how the pencil is held, how the body is sitting, and whether the small muscles in the hand are ready. Fix the mechanics and the neatness follows, without the nagging."),
    h2("What to look at first"),
    li("Grip. A relaxed tripod grip, thumb and first two fingers, beats a tight fist. A chunky pencil or a grip aid can help."),
    li("Posture. Feet flat, bottom back in the chair, paper tilted slightly. A table at the right height makes a real difference."),
    li("The other hand. The non writing hand should steady the paper, not sit in their lap."),
    h2("Strength before neatness"),
    p("Small hands need strong, coordinated muscles before letters can be formed smoothly. Playdough, threading beads, using tweezers, tearing paper and building with small bricks all build the same muscles, and none of it looks like handwriting practice. Ten minutes of that is often more useful than ten minutes of copying letters."),
    p("Then focus on correct letter formation: where each letter starts and the direction it travels. Getting that right early prevents habits that are hard to undo later and makes joined writing far easier when it comes. If writing is becoming a source of tears, a few gentle sessions working on grip and formation can turn it around surprisingly quickly."),
  ],
};
