﻿//#include <iostream>
//#include "bitboard.h"
//#include "position.h"
#include "search.h"
#include "thread.h"
#include "tt.h"
#include "usi.h"
#include "misc.h"

// ----------------------------------------
//  main()
// ----------------------------------------

int main(int argc, char* argv[])
{
	// --- 全体的な初期化

	CommandLine::init(argc,argv);
	USI::init(Options);
	Bitboards::init();
	Position::init();
	Search::init();

	// エンジンオプションの"Threads"があるとは限らないので…。
	size_t thread_num = Options.count("Threads") ? (size_t)Options["Threads"] : 1;
	Threads.set(thread_num);

	//Search::clear();
	Eval::init();

  // yaneuraOu.wasm
	// ここでループしてしまうと、ブラウザのメインスレッドがブロックされてしまうため、コメントアウト

	// USI::loop(argc, argv);
	// Threads.set(0);

	return 0;
}
